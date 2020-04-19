import { UserSchema } from "@huecrm/schemas";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SharedModule } from "../shared/shared.module";
import { AuthenticationJwtStrategy } from "./authentication-jwt.strategy";
import { AuthenticationController } from "./authentication.controller";
import { AuthenticationService } from "./authentication.service";
import { UserService } from "./user.service";

@Module({
	imports: [
		MongooseModule.forFeature([{ name: "User", schema: UserSchema }]),
		SharedModule
	],
	providers: [AuthenticationService, AuthenticationJwtStrategy, UserService],
	controllers: [AuthenticationController],
	exports: []
})
export class AuthenticationModule {
}

