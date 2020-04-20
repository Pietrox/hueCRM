import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class AuthenticationJwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		private authenticationService: AuthenticationService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: process.env.AUTH_TOKEN
		});
	}
	
	async validate(payload) {
		const user = await this.authenticationService.validateUser(payload);
		if (!user) {
			return new HttpException(
				"Unauthorized access", HttpStatus.UNAUTHORIZED
			);
		}
		return user;
	}
}
