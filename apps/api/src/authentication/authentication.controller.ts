import {LoginDto, RegisterDto, UserDto} from '@hue-crm/dto';
import {apiEndpointTitles, apiPaths, apiTags} from '@hue-crm/enums';
import {Controller, Get, HttpStatus, Post, Query, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {ApiOperation, ApiResponse, ApiUseTags} from '@nestjs/swagger';
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
	
	@Get()
	@UseGuards(AuthGuard('jwt'))
	tempAuthentication() {
		return {auth: 'All ok'};
	}
	
	@Post(apiPaths.login)
	@ApiOperation({title: apiEndpointTitles.userLogin})
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
	@ApiOperation({title: apiEndpointTitles.userRegister})
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
}
