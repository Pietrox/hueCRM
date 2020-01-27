import {userParamExample} from '@huecrm/enums';
import {ApiModelProperty} from '@nestjs/swagger';
import {Type} from 'class-transformer';
import {IsNotEmpty, IsString} from 'class-validator';


export class LoginDto {
	@ApiModelProperty({default: userParamExample.username})
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	email: string;
	@ApiModelProperty({default: userParamExample.password})
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	password: string;
}
