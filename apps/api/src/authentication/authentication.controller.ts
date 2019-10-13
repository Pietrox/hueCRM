import {LoginDto, UserDto} from '@hue-crm/dto';
import {apiPaths} from '@hue-crm/enums';
import {Controller, Post} from '@nestjs/common';
import {UserService} from '../shared/user/user.service';

@Controller(apiPaths.auth)
export class AuthenticationController {
	constructor(private  userService: UserService) {
	}
	
	@Post(apiPaths.login)
	async login(loginDto: LoginDto) {
		return await this.userService.findByLogin(loginDto);
	}
	
	@Post(apiPaths.register)
	async register(userDto: UserDto) {
		return await this.userService.create(userDto);
	}
}
