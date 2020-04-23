import { LeadsDto, LeadsUpdateDto } from '@huecrm/dto';
import { apiEndpointDecription, apiParams, apiPaths, apiTags } from '@huecrm/enums';
import { LeadsModel } from '@huecrm/mongoose-models';
import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { FindLeadDto } from '../../../../../libs/dto/src/lib/leads.dto';
import { LeadsService } from './leads.service';


@Controller(apiPaths.leads)
@UseGuards(AuthGuard())
@ApiBearerAuth()
export class LeadsController {
  constructor(
	private leadsService: LeadsService
  ) {
  }
  
  @Get(apiPaths.allLeads)
  @ApiOperation({ summary: apiTags.leadEndpoints, description: apiEndpointDecription.leadGetAll })
  async listAll(): Promise<LeadsModel[]> {
	return await this.leadsService.findAll();
  }
  
  @Post(apiPaths.createLead)
  @ApiOperation({ summary: apiTags.leadEndpoints, description: apiEndpointDecription.leadCreate })
  async create(@Body() lead: LeadsDto) {
	return await this.leadsService.create(lead);
  }
  
  @Post(apiPaths.createLeadMany)
  @ApiOperation({ summary: apiTags.leadEndpoints, description: apiEndpointDecription.leadCreate })
  async createMany(@Body() lead: LeadsDto[]) {
	return await this.leadsService.createMany(lead);
  }
  
  @Get(apiPaths.getLeadById)
  @ApiOperation({ summary: apiTags.leadEndpoints, description: apiEndpointDecription.leadGetById })
  async read(@Query() lead: FindLeadDto) {
	return this.leadsService.findLead();
  }
  
  @Put(apiPaths.updateLeadById)
  @ApiOperation({ summary: apiTags.leadEndpoints, description: apiEndpointDecription.leadUpdateById })
  async update(@Param(apiParams.id) id: string, @Body() lead: LeadsUpdateDto) {
	return this.leadsService.update(id, lead);
  }
  
  @Delete(apiPaths.deleteLeadByEmail)
  @ApiOperation({ summary: apiTags.leadEndpoints, description: apiEndpointDecription.leadDelete })
  async delete(@Param(apiParams.leadId) leadid: string) {
	return this.leadsService.delete(apiParams.email);
  }
}
