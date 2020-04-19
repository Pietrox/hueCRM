import {leadsParamExample} from '@huecrm/enums';
import {ApiModelProperty, ApiModelPropertyOptional} from '@nestjs/swagger';
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
	@ApiModelPropertyOptional({default: leadsParamExample.created})
	created: string;
	@ApiModelPropertyOptional({default: leadsParamExample.owner})
	owner: string;
}

