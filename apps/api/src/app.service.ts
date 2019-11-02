import {Injectable} from '@nestjs/common';

@Injectable()
export class ApplicationService {
	getServerMsg() {
		return 'Server is running';
	}
}
