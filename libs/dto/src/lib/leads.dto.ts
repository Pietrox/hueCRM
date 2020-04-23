import { leadsParamExample } from '@huecrm/enums';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LeadsDto {
  @ApiProperty({ default: leadsParamExample.name })
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty({ default: leadsParamExample.email })
  @IsNotEmpty()
  @IsString()
  email: string;
  @ApiProperty({ default: leadsParamExample.address })
  @IsNotEmpty()
  @IsString()
  address: string;
  @ApiProperty({ default: leadsParamExample.phone })
  @IsNotEmpty()
  @IsString()
  phone: string;
  // @ApiPropertyOptional({ default: leadsParamExample.created })
  // created: string;
  // @ApiPropertyOptional({ default: leadsParamExample.owner })
  // owner: string;
}

export class FindLeadDto {
  @ApiPropertyOptional({ default: leadsParamExample.name })
  name: string;
  @ApiPropertyOptional({ default: leadsParamExample.email })
  email: string;
  @ApiPropertyOptional({ default: leadsParamExample.address })
  address: string;
  @ApiPropertyOptional({ default: leadsParamExample.phone })
  phone: string;
}
