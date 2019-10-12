import {userParamDescription, userParamExample} from '@hue-crm/enums';
import {ApiModelProperty} from '@nestjs/swagger';
import {Type} from 'class-transformer';
import {IsNotEmpty, IsString} from 'class-validator';


export class LoginDto {
	@ApiModelProperty({default: userParamExample.username, description: userParamDescription.username})
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	username: string;
	@ApiModelProperty({default: userParamExample.password, description: userParamDescription.password})
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	password: string;
}
