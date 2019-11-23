import {Injectable} from '@nestjs/common';
import {sign} from 'jsonwebtoken';
import {UserService} from '../shared/user.service';


@Injectable()
export class AuthenticationService {
	constructor(private readonly userService: UserService) {
	}
	
	async signPayload(payload: any) {
		return sign(payload, process.env.AUTH_TOKEN, {expiresIn: process.env.PAYLOAD_SESSION_TIME});
	}
	
	async validateUser(payload: any) {
		return await this.userService.findByPayload(payload);
		
	}
}
