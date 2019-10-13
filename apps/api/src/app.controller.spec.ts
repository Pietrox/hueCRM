import {Test, TestingModule} from '@nestjs/testing';
import {ApplicationController} from './app.controller';
import {ApplicationService} from './app.service';


describe('ApplicationController', () => {
	let app: TestingModule;
	
	beforeAll(async () => {
		app = await Test.createTestingModule({
			controllers: [ApplicationController],
			providers: [ApplicationService]
		}).compile();
	});
	
	describe('getData', () => {
		it('should return "Welcome to api!"', () => {
			const appController = app.get<ApplicationController>(ApplicationController);
			expect(appController.getData()).toEqual({message: 'Welcome to api!'});
		});
	});
});
