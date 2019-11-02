import {userParamExample, userParams} from '@hue-crm/enums';
import {ApiProperty} from '@nestjs/swagger';
import {Type} from 'class-transformer';
import {IsNotEmpty, IsString} from 'class-validator';

export class TokenDto {
	@ApiProperty({name: userParams.token, enum: [userParamExample.token]})
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	token: string;
	@ApiProperty({name: userParams.role, enum: [userParamExample.role]})
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	role: string;
	
}
