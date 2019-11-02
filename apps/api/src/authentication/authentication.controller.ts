import {DeleteUserDto, LoginDto, RegisterDto, TokenDto, UserDto,} from '@hue-crm/dto';
import {apiEndpointTitles, apiPaths, apiTags} from '@hue-crm/enums';
import {User} from '@hue-crm/utilities';
import {Controller, Get, HttpStatus, Post, Query, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {ApiOperation, ApiResponse, ApiUseTags} from '@nestjs/swagger';

import {AdminGuard} from '../guards/admin.guard';
import {UserService} from '../shared/user.service';
import {AuthenticationService} from './authentication.service';

@Controller(apiPaths.auth)
@ApiUseTags(apiTags.userEndpoints)
export class AuthenticationController {
	constructor(
		private  userService: UserService,
		private authenticationService: AuthenticationService
	) {
	}
	
	@Get(apiPaths.allUsers)
	@UseGuards(AuthGuard('jwt'), AdminGuard)
	@ApiOperation({summary: apiEndpointTitles.userAll})
	@ApiResponse({status: HttpStatus.OK, type: UserDto})
	@UsePipes(new ValidationPipe({transform: true}))
	async findAll(@User() user: TokenDto) {
		console.log(user);
		return await this.userService.findAll();
	}
	
	@Post(apiPaths.login)
	@ApiOperation({summary: apiEndpointTitles.userLogin})
	@ApiResponse({status: HttpStatus.OK, type: UserDto})
	@UsePipes(new ValidationPipe({transform: true}))
	async login(@Query() loginDto: LoginDto) {
		const user = await this.userService.findByLogin(loginDto);
		const payload = {
			username: user.username,
			role: user.role
		};
		const token = await this.authenticationService.signPayload(payload);
		return {user, token};
	}
	
	@Post(apiPaths.register)
	@ApiOperation({summary: apiEndpointTitles.userRegister})
	@ApiResponse({status: HttpStatus.OK, type: UserDto})
	@UsePipes(new ValidationPipe({transform: true}))
	async register(@Query() registerDto: RegisterDto) {
		const user = await this.userService.create(registerDto);
		const payload = {
			username: user.username,
			role: user.role,
		};
		const token = await this.authenticationService.signPayload(payload);
		return {user, token};
	}
	
	@Post(apiPaths.delete)
	@ApiOperation({summary: apiEndpointTitles.userDelete})
	@ApiResponse({status: HttpStatus.OK, type: DeleteUserDto})
	@UsePipes(new ValidationPipe({transform: true}))
	async deleteByLogin(@Query() deleteUserDto: DeleteUserDto) {
		await this.userService.deleteByLogin(deleteUserDto);
		return 'User has been deleted';
		
	}
}
