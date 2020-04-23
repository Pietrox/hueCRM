import { JwtPayload, UserResponse } from '@huecrm/dto';
import { UserModel } from '@huecrm/mongoose-models';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { Model } from 'mongoose';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';

@Injectable()
export class AuthenticationJwtStrategy extends PassportStrategy(Strategy) {
  constructor(
	@InjectModel('User') private userModel: Model<UserModel>) {
	super({
	  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	  ignoreExpiration: false,
	  secretOrKey: process.env.AUTH_TOKEN
	});
  }
  
  async validate(payload: JwtPayload, done: VerifiedCallback): Promise<UserResponse> {
	const username = payload.username;
	const user = await this.userModel.findOne({ username });
	if (!user) {
	  throw new UnauthorizedException();
	}
	return user;
  }
}
