import { userParamExample } from "@huecrm/enums";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class RegisterDto {
	@ApiProperty({ default: userParamExample.username })
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	username: string;
	@ApiProperty({ default: userParamExample.email })
	@IsNotEmpty()
	@IsEmail()
	@Type(() => String)
	email: string;
	@ApiProperty({ default: userParamExample.password })
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	password: string;
	@ApiProperty({ default: userParamExample.role })
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	role: string;
}
