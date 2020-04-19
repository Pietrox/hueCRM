import { userParamExample } from "@huecrm/enums";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";


export class LoginDto {
	@ApiProperty({ default: userParamExample.username })
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	email: string;
	@ApiProperty({ default: userParamExample.password })
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	password: string;
}
