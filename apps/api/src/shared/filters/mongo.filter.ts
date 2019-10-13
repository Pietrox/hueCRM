import {ArgumentsHost, Catch, ExceptionFilter} from '@nestjs/common';
import {MongoError} from 'mongodb';

@Catch(MongoError)
export class MongoExceptionFilter implements ExceptionFilter {
	catch(exception: MongoError, host: ArgumentsHost) {
		switch (exception.code) {
			case 11000:
				return;
		}
	}
}
