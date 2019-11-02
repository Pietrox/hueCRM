import {Test, TestingModule} from '@nestjs/testing';
import {LeadsService} from './leads.service';

describe('LeadsService', () => {
	let service: LeadsService;
	
	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [LeadsService],
		}).compile();
		
		service = module.get<LeadsService>(LeadsService);
	});
	
	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
