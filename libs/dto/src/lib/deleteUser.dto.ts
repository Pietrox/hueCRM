import {userParamExample} from '@huecrm/enums';
import {ApiModelProperty} from '@nestjs/swagger';
import {Type} from 'class-transformer';
import {IsNotEmpty, IsString} from 'class-validator';

export class DeleteUserDto {
	@ApiModelProperty({default: userParamExample.username})
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	username: string;
	// @ApiModelProperty({default: userParamExample.token, description: userParams.token})
	// @IsNotEmpty()
	// @IsString()
	// @Type(() => String)
	// token: string;
	
}
