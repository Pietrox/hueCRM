import {Message} from '@hue-crm/api-interfaces';
import {Controller, Get} from '@nestjs/common';
import {ApplicationService} from './app.service';

@Controller()
export class ApplicationController {
	constructor(private readonly appService: ApplicationService) {
	}
	
	@Get('hello')
	getData(): Message {
		return this.appService.getData();
	}
}
