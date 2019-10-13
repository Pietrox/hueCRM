import {LoginDto, RegisterDto, UserDto} from '@hue-crm/dto';
import {apiEndpointTitles, apiPaths, apiTags} from '@hue-crm/enums';
import {Controller, HttpStatus, Post, Query, UsePipes, ValidationPipe} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiUseTags} from '@nestjs/swagger';
import {UserService} from '../shared/user.service';

@Controller(apiPaths.auth)
@ApiUseTags(apiTags.userEndpoints)
export class AuthenticationController {
	constructor(private  userService: UserService) {
	}
	
	@Post(apiPaths.login)
	@ApiOperation({title: apiEndpointTitles.userLogin})
	@ApiResponse({status: HttpStatus.OK, type: UserDto})
	@UsePipes(new ValidationPipe({transform: true}))
	async login(@Query() loginDto: LoginDto) {
		return await this.userService.findByLogin(loginDto);
	}
	
	@Post(apiPaths.register)
	@ApiOperation({title: apiEndpointTitles.userRegister})
	@ApiResponse({status: HttpStatus.OK, type: UserDto})
	@UsePipes(new ValidationPipe({transform: true}))
	async register(@Query() registerDto: RegisterDto) {
		return await this.userService.create(registerDto);
	}
}
