import {apiEndpointDecription, apiPaths, apiTags} from '@huecrm/enums';
import {Controller, Get} from '@nestjs/common';
import {ApiOperation} from '@nestjs/swagger';
import {ModuleModelDto} from '../../../../../libs/dto/src/lib/module.model.dto';
import {ModuleModelsService} from './module-models.service';

@Controller(apiPaths.moduleModel)
export class ModuleModelsController {
	constructor(private  moduleModelsService: ModuleModelsService) {
	}
	
	@Get(apiPaths.leads)
	@ApiOperation({title: apiTags.moduleModelEndpoints, description: apiEndpointDecription.getModuleModelLeads})
	async getLeads(): Promise<ModuleModelDto> {
		return await this.moduleModelsService.getLeads();
	}
	
	// @Post(apiPaths.create)
	// @ApiOperation({title: apiTags.moduleModelEndpoints, description: apiEndpointDecription.createModuleModelLeads})
	// async create(@Body() moduleModelDto: ModuleModelDto) {
	// 	return await this.moduleModelsService.create(moduleModelDto);
	// }
}
