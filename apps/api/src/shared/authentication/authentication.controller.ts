import { AuthenticationResponse, DeleteUserDto, LoginDto, RegisterDto } from '@huecrm/dto';
import { apiEndpointDecription, apiPaths, apiTags } from '@huecrm/enums';
import { Body, Controller, Delete, Get, Post, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiOperation } from '@nestjs/swagger';
import { AuthenticationService } from './authentication.service';

@Controller(apiPaths.users)
export class AuthenticationController {
  constructor(
	private authenticationService: AuthenticationService
  ) {
  }
  
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  @Get(apiPaths.allUsers)
  @ApiOperation({ summary: apiTags.userEndpoints, description: apiEndpointDecription.userAll })
  async findAll(@Query() user: any) {
	return await this.authenticationService.findAll();
  }
  
  @Post(apiPaths.login)
  @ApiOperation({ summary: apiTags.userEndpoints, description: apiEndpointDecription.userLogin })
  @ApiBody({ type: LoginDto })
  async login(@Body(ValidationPipe) loginDto: LoginDto): Promise<AuthenticationResponse> {
	const user = await this.authenticationService.login(loginDto);
	return user;
  }
  
  @Post(apiPaths.register)
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
	return 'User has been deleted';
	
  }
}
