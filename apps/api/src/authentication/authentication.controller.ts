import {DeleteUserDto, LoginDto, RegisterDto, TokenDto,} from '@hue-crm/dto';
import {apiEndpointTitles, apiPaths, apiTags} from '@hue-crm/enums';
import {User} from '@hue-crm/utilities';
import {Controller, Get, Post, Query, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {ApiOperation, ApiUseTags} from '@nestjs/swagger';

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
	async findAll(@User() user: TokenDto) {
		console.log(user);
		return await this.userService.findAll();
	}
	
	@Post(apiPaths.login)
	@ApiOperation({summary: apiEndpointTitles.userLogin})
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
	async deleteByLogin(@Query() deleteUserDto: DeleteUserDto) {
		await this.userService.deleteByLogin(deleteUserDto);
		return 'User has been deleted';
		
	}
}
