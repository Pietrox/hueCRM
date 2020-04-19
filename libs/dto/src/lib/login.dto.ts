import { userParamExample } from "@huecrm/enums";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MinLength } from "class-validator";


export class LoginDto {
	@ApiProperty({ default: userParamExample.username })
	@IsEmail()
	@IsString()
	@MinLength(4)
	email: string;
	@ApiProperty({ default: userParamExample.password })
	@IsString()
	@MinLength(4)
	password: string;
}
