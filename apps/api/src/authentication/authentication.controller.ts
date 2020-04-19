import { DeleteUserDto, LoginDto, RegisterDto } from "@huecrm/dto";
import { apiEndpointDecription, apiPaths, apiTags } from "@huecrm/enums";
import { Body, Controller, Delete, Get, Post, Query, UseGuards, ValidationPipe } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation } from "@nestjs/swagger";
import { AdminGuard } from "../guards/admin.guard";
import { AuthenticationService } from "./authentication.service";
import { UserService } from "./user.service";

@Controller(apiPaths.auth)
export class AuthenticationController {
	constructor(
		private  userService: UserService,
		private authenticationService: AuthenticationService
	) {
	}
	
	@ApiBearerAuth()
	@Get(apiPaths.allUsers)
	@UseGuards(AdminGuard)
	@ApiOperation({ summary: apiTags.userEndpoints, description: apiEndpointDecription.userAll })
	async findAll(@Query() user: any) {
		return await this.userService.findAll();
	}
	
	@Post(apiPaths.login)
	@ApiOperation({ summary: apiTags.userEndpoints, description: apiEndpointDecription.userLogin })
	async login(@Body(ValidationPipe) loginDto: LoginDto) {
		const user = await this.userService.findByLogin(loginDto);
		const payload = {
			username: user.username,
			role: user.role
		};
		const token = await this.authenticationService.signPayload(payload);
		return { user, token };
	}
	
	@Post(apiPaths.register)
	@ApiOperation({ summary: apiTags.userEndpoints, description: apiEndpointDecription.userRegister })
	async register(@Body(ValidationPipe) registerDto: RegisterDto) {
		const user = await this.userService.create(registerDto);
		const payload = {
			username: user.username,
			role: user.role
		};
		const token = await this.authenticationService.signPayload(payload);
		return { user, token };
	}
	
	@ApiBearerAuth()
	@Delete(apiPaths.delete)
	@ApiOperation({ summary: apiTags.userEndpoints, description: apiEndpointDecription.userDelete })
	async deleteByLogin(@Body() deleteUserDto: DeleteUserDto) {
		await this.userService.deleteByLogin(deleteUserDto);
		return 'User has been deleted';
		
	}
}
