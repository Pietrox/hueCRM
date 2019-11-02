import {Test, TestingModule} from '@nestjs/testing';
import {LeadsController} from './leads.controller';

describe('Leads Controller', () => {
	let controller: LeadsController;
	
	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [LeadsController],
		}).compile();
		
		controller = module.get<LeadsController>(LeadsController);
	});
	
	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
