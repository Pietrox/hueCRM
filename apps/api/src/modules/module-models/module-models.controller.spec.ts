import {Test, TestingModule} from '@nestjs/testing';
import {ModuleModelsController} from './module-models.controller';

describe('ModuleModels Controller', () => {
	let controller: ModuleModelsController;
	
	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [ModuleModelsController],
		}).compile();
		
		controller = module.get<ModuleModelsController>(ModuleModelsController);
	});
	
	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
