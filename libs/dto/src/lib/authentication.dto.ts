import { userParamExample } from "@huecrm/enums";
import { ApiProperty } from "@nestjs/swagger";

import { Type } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class AuthenticationDto {
	@ApiProperty({ default: userParamExample.password })
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	username: string;
	@ApiProperty({ default: userParamExample.password })
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	password: string;
	
}
