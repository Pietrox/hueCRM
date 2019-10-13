import {Test} from '@nestjs/testing';

import {ApplicationService} from './app.service';

describe('AppService', () => {
	let service: ApplicationService;
	
	beforeAll(async () => {
		const app = await Test.createTestingModule({
			providers: [ApplicationService]
		}).compile();
		
		service = app.get<ApplicationService>(ApplicationService);
	});
	
});
