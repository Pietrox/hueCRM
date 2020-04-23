import { UserSchema } from '@huecrm/schemas';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { AuthenticationJwtStrategy } from './authentication-jwt.strategy';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';

@Module({
  imports: [
	MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
	JwtModule.register({
	  secret: process.env.AUTH_TOKEN,
	  signOptions: {
		expiresIn: 3600
	  }
	}),
	PassportModule.register({ defaultStrategy: 'jwt' })
  ],
  providers: [AuthenticationService, AuthenticationJwtStrategy],
  controllers: [AuthenticationController],
  exports: [AuthenticationJwtStrategy, PassportModule]
})
export class AuthenticationModule {
}

