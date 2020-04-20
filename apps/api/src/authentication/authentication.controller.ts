import { AuthenticationResponse, DeleteUserDto, LoginDto, RegisterDto, UserResponse } from "@huecrm/dto";
import { apiEndpointDecription, apiPaths, apiTags } from "@huecrm/enums";
import {
	Body,
	ClassSerializerInterceptor,
	Controller,
	Delete,
	Get,
	Post,
	Query,
	SerializeOptions,
	UseGuards,
	UseInterceptors,
	ValidationPipe
} from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOperation, ApiUnauthorizedResponse } from "@nestjs/swagger";
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
	@UseInterceptors(ClassSerializerInterceptor)
	@SerializeOptions({ groups: ["password"] })
	@ApiCreatedResponse({ description: "User Login" })
	@ApiUnauthorizedResponse({ description: "Invalid Credentials" })
	@ApiOperation({ summary: apiTags.userEndpoints, description: apiEndpointDecription.userLogin })
	@ApiBody({ type: LoginDto })
	async login(@Body(ValidationPipe) loginDto: LoginDto): Promise<UserResponse> {
		const user = await this.authenticationService.login(loginDto);
		return user;
	}
	
	@Post(apiPaths.register)
	@UseInterceptors(ClassSerializerInterceptor)
	@ApiOperation({ summary: apiTags.userEndpoints, description: apiEndpointDecription.userRegister })
	@ApiBody({ type: RegisterDto })
	async register(@Body(ValidationPipe) registerDto: RegisterDto): Promise<AuthenticationResponse> {
		const user = await this.authenticationService.register(registerDto);
		return user;
	}
	
	@ApiBearerAuth()
	@Delete(apiPaths.delete)
	@ApiOperation({ summary: apiTags.userEndpoints, description: apiEndpointDecription.userDelete })
	async deleteByLogin(@Body() deleteUserDto: DeleteUserDto) {
		await this.authenticationService.deleteByLogin(deleteUserDto);
		return "User has been deleted";
		
	}
}
