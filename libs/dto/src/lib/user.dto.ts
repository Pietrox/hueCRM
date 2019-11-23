import {userParamExample} from '@huecrm/enums';
import {ApiModelProperty} from '@nestjs/swagger';
import {Type} from 'class-transformer';
import {IsEmail, IsNotEmpty, IsString} from 'class-validator';


export class UserDto {
	@ApiModelProperty({default: userParamExample.username})
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	username: string;
	@ApiModelProperty({default: userParamExample.email})
	@IsNotEmpty()
	@IsEmail()
	@Type(() => String)
	email: string;
	@ApiModelProperty({default: userParamExample.password})
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	password: string;
	@ApiModelProperty({default: userParamExample.role})
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	role: string;
}
