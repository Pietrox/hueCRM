import {leadsParamExample} from '@huecrm/enums';
import {ApiModelPropertyOptional} from '@nestjs/swagger';
import {IsString} from 'class-validator';

export class LeadsUpdateDto {
	
	@ApiModelPropertyOptional({description: leadsParamExample.name})
	@IsString()
	name: string;
	@ApiModelPropertyOptional({description: leadsParamExample.email})
	@IsString()
	email: string;
	@ApiModelPropertyOptional({description: leadsParamExample.address})
	@IsString()
	address: string;
	@ApiModelPropertyOptional({description: leadsParamExample.phone})
	@IsString()
	phone: string;
	@ApiModelPropertyOptional({description: leadsParamExample.owner})
	@IsString()
	owner: string;
}
