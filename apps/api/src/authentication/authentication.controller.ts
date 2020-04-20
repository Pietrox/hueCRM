import { DeleteUserDto, LoginDto, RegisterDto } from "@huecrm/dto";
import { apiEndpointDecription, apiPaths, apiTags } from "@huecrm/enums";
import { Body, Controller, Delete, Get, Post, Query, UseGuards, ValidationPipe } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation } from "@nestjs/swagger";
import { AdminGuard } from "../guards/admin.guard";
import { AuthenticationService } from "./authentication.service";

@Controller(apiPaths.users)
export class AuthenticationController {
	constructor(
		private authenticationService: AuthenticationService
	) {
	}
	
	@ApiBearerAuth()
	@Get(apiPaths.allUsers)
	@UseGuards(AdminGuard)
	@ApiOperation({ summary: apiTags.userEndpoints, description: apiEndpointDecription.userAll })
	async findAll(@Query() user: any) {
		return await this.authenticationService.findAll();
	}
	
	@Post(apiPaths.login)
	@ApiOperation({ summary: apiTags.userEndpoints, description: apiEndpointDecription.userLogin })
	async login(@Body() loginDto: LoginDto) {
		const user = await this.authenticationService.login(loginDto);
		return { user };
	}
	
	@Post(apiPaths.register)
	@ApiOperation({ summary: apiTags.userEndpoints, description: apiEndpointDecription.userRegister })
	async register(@Body(ValidationPipe) registerDto: RegisterDto) {
		const user = await this.authenticationService.create(registerDto);
		return { user };
	}
	
	@ApiBearerAuth()
	@Delete(apiPaths.delete)
	@ApiOperation({ summary: apiTags.userEndpoints, description: apiEndpointDecription.userDelete })
	async deleteByLogin(@Body() deleteUserDto: DeleteUserDto) {
		await this.authenticationService.deleteByLogin(deleteUserDto);
		return "User has been deleted";
		
	}
}
