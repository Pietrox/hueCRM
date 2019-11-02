import {userParamExample, userParams} from '@hue-crm/enums';
import {ApiProperty} from '@nestjs/swagger';
import {Type} from 'class-transformer';
import {IsNotEmpty, IsString} from 'class-validator';

export class DeleteUserDto {
	@ApiProperty({name: userParams.username, enum: [userParamExample.username]})
	@IsNotEmpty()
	@IsString()
	@Type(() => String)
	username: string;
	// @ApiProperty({default: userParamExample.token, description: userParams.token})
	// @IsNotEmpty()
	// @IsString()
	// @Type(() => String)
	// token: string;
	
}
