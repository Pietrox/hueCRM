import { userParamExample } from "@huecrm/enums";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class UserDto {
	@ApiProperty({ default: userParamExample.username })
	@IsNotEmpty()
	@IsString()
	username: string;
	@ApiProperty({ default: userParamExample.email })
	@IsNotEmpty()
	@IsEmail()
	email: string;
	@ApiProperty({ default: userParamExample.password })
	@IsNotEmpty()
	@IsString()
	password: string;
	@ApiProperty({ default: userParamExample.role })
	@IsNotEmpty()
	@IsString()
	role: string;
}
