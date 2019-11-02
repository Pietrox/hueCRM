import {userParamExample, userParams} from '@hue-crm/enums';
import {ApiProperty} from '@nestjs/swagger';
import {Type} from 'class-transformer';
import {IsNotEmpty, IsString} from 'class-validator';


export class LoginDto {
	@ApiProperty({name: userParams.username, enum: [userParamExample.username]})
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	username: string;
	@ApiProperty({name: userParams.password, enum: [userParamExample.password]})
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	password: string;
}
