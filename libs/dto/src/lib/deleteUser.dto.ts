import {userParamDescription, userParamExample} from '@hue-crm/enums';
import {ApiModelProperty} from '@nestjs/swagger';
import {Type} from 'class-transformer';
import {IsNotEmpty, IsString} from 'class-validator';

export class DeleteUserDto {
	@ApiModelProperty({default: userParamExample.username, description: userParamDescription.username})
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	username: string;
	// @ApiModelProperty({default: userParamExample.token, description: userParamDescription.token})
	// @IsNotEmpty()
	// @IsString()
	// @Type(() => String)
	// token: string;
	
}
