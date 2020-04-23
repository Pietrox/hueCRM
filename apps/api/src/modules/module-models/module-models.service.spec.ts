import { Test, TestingModule } from '@nestjs/testing';
import { ModuleModelsService } from './module-models.service';

describe('ModuleModelsService', () => {
  let service: ModuleModelsService;
  
  beforeEach(async () => {
	const module: TestingModule = await Test.createTestingModule({
	  providers: [ModuleModelsService]
	}).compile();
	
	service = module.get<ModuleModelsService>(ModuleModelsService);
  });
  
  it('should be defined', () => {
	expect(service).toBeDefined();
  });
});
