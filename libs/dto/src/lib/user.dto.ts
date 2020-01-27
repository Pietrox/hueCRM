import {userParamExample} from '@huecrm/enums';
import {ApiModelProperty} from '@nestjs/swagger';
import {IsEmail, IsNotEmpty, IsString} from 'class-validator';


export class UserDto {
	@ApiModelProperty({default: userParamExample.username})
	@IsNotEmpty()
	@IsString()
	username: string;
	@ApiModelProperty({default: userParamExample.email})
	@IsNotEmpty()
	@IsEmail()
	email: string;
	@ApiModelProperty({default: userParamExample.password})
	@IsNotEmpty()
	@IsString()
	password: string;
	@ApiModelProperty({default: userParamExample.role})
	@IsNotEmpty()
	@IsString()
	role: string;
}
