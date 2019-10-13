import {userParamDescription, userParamExample} from '@hue-crm/enums';
import {ApiModelProperty} from '@nestjs/swagger';
import {Type} from 'class-transformer';
import {IsEmail, IsNotEmpty, IsString} from 'class-validator';


export class UserDto {
	@ApiModelProperty({default: userParamExample.username, description: userParamDescription.username})
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	username: string;
	@ApiModelProperty({default: userParamExample.email, description: userParamDescription.email})
	@IsNotEmpty()
	@IsEmail()
	@Type(() => String)
	email: string;
	@ApiModelProperty({default: userParamExample.password, description: userParamDescription.password})
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	password: string;
	@ApiModelProperty({default: userParamExample.role, description: userParamDescription.role})
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	role: string;
}
