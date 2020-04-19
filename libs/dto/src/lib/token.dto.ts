import { userParamExample } from "@huecrm/enums";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class TokenDto {
	@ApiProperty({ description: userParamExample.token })
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	token: string;
	@ApiProperty({ description: userParamExample.role })
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	role: string;
	
}
