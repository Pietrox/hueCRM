import {userParamExample} from '@huecrm/enums';
import {ApiModelProperty} from '@nestjs/swagger';
import {Type} from 'class-transformer';
import {IsNotEmpty, IsString} from 'class-validator';

export class TokenDto {
	@ApiModelProperty({description: userParamExample.token})
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	token: string;
	@ApiModelProperty({description: userParamExample.role})
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	role: string;
	
}
