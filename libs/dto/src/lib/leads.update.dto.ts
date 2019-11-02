import {leadsParamExample, leadsParams} from '@hue-crm/enums';
import {ApiPropertyOptional} from '@nestjs/swagger';
import {IsString} from 'class-validator';

export class LeadsUpdateDto {
	
	@ApiPropertyOptional({name: leadsParams.name, enum: [leadsParamExample.name]})
	@IsString()
	name: string;
	@ApiPropertyOptional({name: leadsParams.email, enum: [leadsParamExample.email]})
	@IsString()
	email: string;
	@ApiPropertyOptional({name: leadsParams.address, enum: [leadsParamExample.address]})
	@IsString()
	address: string;
	@ApiPropertyOptional({name: leadsParams.phone, enum: [leadsParamExample.phone]})
	@IsString()
	phone: string;
	@ApiPropertyOptional({name: leadsParams.owner, enum: [leadsParamExample.owner]})
	@IsString()
	owner: string;
}
