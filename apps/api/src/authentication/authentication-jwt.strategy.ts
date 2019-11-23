import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport';
import {ExtractJwt, Strategy, VerifiedCallback} from 'passport-jwt';
import {AuthenticationService} from './authentication.service';

@Injectable()
export class AuthenticationJwtStrategy extends PassportStrategy(Strategy) {
	constructor(private authenticationService: AuthenticationService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: process.env.AUTH_TOKEN
		});
	}
	
	async validate(payload: any, done: VerifiedCallback) {
		const user = await this.authenticationService.validateUser(payload);
		if (!user) {
			return done(new HttpException('Unauthorized access',
					HttpStatus.UNAUTHORIZED),
				false,
			);
		}
		return done(null, user, payload.iat);
	}
}
