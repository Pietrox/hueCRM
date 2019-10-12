import {Injectable} from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport';
import {ExtractJwt, Strategy, VerifiedCallback} from 'passport-jwt';
import {AuthenticationService} from './authentication.service';

@Injectable()
export class AuthenticationJwtStrategy extends PassportStrategy(Strategy) {
	constructor(private authenticationService: AuthenticationService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
			,
			secretOrKey: 'secretKey'
		});
	}
	
	async validate(payload: any, done: VerifiedCallback) {
		return done(null, payload.iat);
	}
}
