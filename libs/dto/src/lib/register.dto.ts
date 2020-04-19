import { userParamExample } from "@huecrm/enums";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { LoginDto } from "./login.dto";


export class RegisterDto extends LoginDto {
	@ApiProperty({ default: userParamExample.username })
	@IsString()
	@MinLength(4)
	@MaxLength(30)
	@Type(() => String)
	username: string;
	@ApiProperty({ default: userParamExample.role })
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	role: string;
}
