import {DeleteUserDto, LoginDto, RegisterDto} from '@huecrm/dto';
import {apiEndpointDecription, apiPaths, apiTags} from '@huecrm/enums';
import {Body, Controller, Delete, Get, Post, Query, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {ApiBearerAuth, ApiOperation} from '@nestjs/swagger';
import {AdminGuard} from '../guards/admin.guard';
import {UserService} from '../shared/user.service';
import {AuthenticationService} from './authentication.service';

@Controller(apiPaths.auth)
@ApiBearerAuth()
export class AuthenticationController {
	constructor(
		private  userService: UserService,
		private authenticationService: AuthenticationService
	) {
	}
	
	@Get(apiPaths.allUsers)
	@UseGuards(AuthGuard('jwt'), AdminGuard)
	@ApiOperation({title: apiTags.userEndpoints, description: apiEndpointDecription.userAll})
	async findAll(@Query() user: any) {
		return await this.userService.findAll();
	}
	
	@Post(apiPaths.login)
	@ApiOperation({title: apiTags.userEndpoints, description: apiEndpointDecription.userLogin})
	async login(@Body() loginDto: LoginDto) {
		const user = await this.userService.findByLogin(loginDto);
		const payload = {
			username: user.username,
			role: user.role
		};
		const token = await this.authenticationService.signPayload(payload);
		return {user, token};
	}
	
	@Post(apiPaths.register)
	@ApiOperation({title: apiTags.userEndpoints, description: apiEndpointDecription.userRegister})
	async register(@Body() registerDto: RegisterDto) {
		const user = await this.userService.create(registerDto);
		const payload = {
			username: user.username,
			role: user.role,
		};
		const token = await this.authenticationService.signPayload(payload);
		return {user, token};
	}
	
	@Delete(apiPaths.delete)
	@ApiOperation({title: apiTags.userEndpoints, description: apiEndpointDecription.userDelete})
	async deleteByLogin(@Body() deleteUserDto: DeleteUserDto) {
		await this.userService.deleteByLogin(deleteUserDto);
		return 'User has been deleted';
		
	}
}
