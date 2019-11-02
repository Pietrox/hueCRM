import {leadsParamExample, leadsParams} from '@hue-crm/enums';
import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty, IsString} from 'class-validator';

export class LeadsDto {
	
	@ApiProperty({name: leadsParams.name, enum: [leadsParamExample.name]})
	@IsNotEmpty()
	@IsString()
	name: string;
	@ApiProperty({name: leadsParams.email, enum: [leadsParamExample.email]})
	@IsNotEmpty()
	@IsString()
	email: string;
	@ApiProperty({name: leadsParams.address, enum: [leadsParamExample.address]})
	@IsNotEmpty()
	@IsString()
	address: string;
	@ApiProperty({name: leadsParams.phone, enum: [leadsParamExample.phone]})
	@IsNotEmpty()
	@IsString()
	phone: string;
	@ApiProperty({name: leadsParams.created, enum: [leadsParamExample.created]})
	@IsNotEmpty()
	@IsString()
	created: Date;
	@ApiProperty({name: leadsParams.owner, enum: [leadsParamExample.owner]})
	@IsNotEmpty()
	@IsString()
	owner: string;
}

