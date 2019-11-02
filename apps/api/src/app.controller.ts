import {Controller, Get} from '@nestjs/common';
import {ApplicationService} from './app.service';

@Controller('/')
export class ApplicationController {
	constructor(private readonly applicationService: ApplicationService) {
	}
	
	@Get()
	getServerMsg(): string {
		return this.applicationService.getServerMsg();
	}
}
