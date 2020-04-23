import { leadsParamExample } from "@huecrm/enums";
import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class LeadsUpdateDto {
	
	@ApiPropertyOptional({ description: leadsParamExample.name })
	@IsString()
	name: string;
	@ApiPropertyOptional({ description: leadsParamExample.email })
	@IsString()
	email: string;
	@ApiPropertyOptional({ description: leadsParamExample.address })
	@IsString()
	address: string;
	@ApiPropertyOptional({ description: leadsParamExample.phone })
	@IsString()
	phone: string;
	@ApiPropertyOptional({ description: leadsParamExample.owner })
	@IsString()
	owner: string;
}
