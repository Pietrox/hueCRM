import {leadsParamExample} from '@huecrm/enums';
import {ApiModelProperty} from '@nestjs/swagger';
import {IsNotEmpty, IsString} from 'class-validator';

export class LeadsDto {
	
	@ApiModelProperty({default: leadsParamExample.name})
	@IsNotEmpty()
	@IsString()
	name: string;
	@ApiModelProperty({default: leadsParamExample.email})
	@IsNotEmpty()
	@IsString()
	email: string;
	@ApiModelProperty({default: leadsParamExample.address})
	@IsNotEmpty()
	@IsString()
	address: string;
	@ApiModelProperty({default: leadsParamExample.phone})
	@IsNotEmpty()
	@IsString()
	phone: string;
	@ApiModelProperty({default: leadsParamExample.created})
	@IsNotEmpty()
	@IsString()
	created: string;
	@ApiModelProperty({default: leadsParamExample.owner})
	@IsNotEmpty()
	@IsString()
	owner: string;
}

