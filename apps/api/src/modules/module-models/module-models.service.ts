import {Injectable} from '@nestjs/common';
import {ModuleModelDto} from '../../../../../libs/dto/src/lib/module.model.dto';


@Injectable()
export class ModuleModelsService {
	constructor() {
	}
	
	async getLeads(): Promise<ModuleModelDto> {
		const modulesColumnsModel = require('../../../../../config/modules/leads.columns.json');
		return modulesColumnsModel;
	}
	
	// async create(moduleModelDto: ModuleModelDto): Promise<ModuleModelDto> {
	// 	return 'test'
	// }
}
