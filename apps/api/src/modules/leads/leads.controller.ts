import {LeadsDto, LeadsUpdateDto} from '@hue-crm/dto';
import {apiEndpointTitles, apiParams, apiPaths, apiTags} from '@hue-crm/enums';
import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ApiOperation, ApiUseTags} from '@nestjs/swagger';
import {LeadsService} from './leads.service';

@Controller(apiPaths.leads)
@ApiUseTags(apiTags.leadEndpoints)
export class LeadsController {
	constructor(private leadsService: LeadsService) {
	}
	
	@Get(apiPaths.allLeads)
	@ApiOperation({summary: apiEndpointTitles.leadGetAll})
	async listAll() {
		return this.leadsService.findAll();
	}
	
	@Post(apiPaths.createLead)
	@ApiOperation({summary: apiEndpointTitles.leadCreate})
	async create(@Body() lead: LeadsDto) {
		return this.leadsService.create(lead);
	}
	
	@Get(apiPaths.getLeadById)
	@ApiOperation({summary: apiEndpointTitles.leadGetById})
	async read(@Param(apiParams.id) id: string) {
		return this.leadsService.findOne(id);
	}
	
	@Put(apiPaths.updateLeadById)
	@ApiOperation({summary: apiEndpointTitles.leadUpdateById})
	async update(@Param(apiParams.id) id: string, @Body() lead: LeadsUpdateDto) {
		return this.leadsService.update(id, lead);
	}
	
	@Delete(apiPaths.deleteLeadById)
	@ApiOperation({summary: apiEndpointTitles.leadDelete})
	async delete(@Param(apiParams.id) id: string) {
		return this.leadsService.delete(apiParams.id);
	}
}
