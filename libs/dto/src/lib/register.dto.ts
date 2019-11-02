import {userParamExample, userParams} from '@hue-crm/enums';
import {ApiProperty} from '@nestjs/swagger';
import {Type} from 'class-transformer';
import {IsEmail, IsNotEmpty, IsString} from 'class-validator';


export class RegisterDto {
	@ApiProperty({name: userParams.username, enum: [userParamExample.username]})
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	username: string;
	@ApiProperty({name: userParams.email, enum: [userParamExample.email]})
	@IsNotEmpty()
	@IsEmail()
	@Type(() => String)
	email: string;
	@ApiProperty({name: userParams.password, enum: [userParamExample.password]})
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	password: string;
}
