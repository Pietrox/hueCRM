import {Message} from '@hue-crm/api-interfaces';
import {Injectable} from '@nestjs/common';

@Injectable()
export class ApplicationService {
	getData(): Message {
		return {message: 'Welcome to api!'};
	}
}
