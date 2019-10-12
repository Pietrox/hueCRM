import {Message} from '@hue-crm/api-interfaces';
import {Injectable} from '@nestjs/common';

@Injectable()
export class ApplicationService {
	static getData(): Message {
		return {message: 'Welcome to api!'};
	}
}
