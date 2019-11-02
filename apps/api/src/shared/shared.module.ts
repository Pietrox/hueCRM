import {UserSchema} from '@hue-crm/schemas';
import {Module} from '@nestjs/common';
import {APP_FILTER, APP_INTERCEPTOR} from '@nestjs/core';
import {MongooseModule} from '@nestjs/mongoose';
import {ConfigurationService} from './configuration.service';
import {HttpExceptionFilter} from './filters/http-exception.filter';
import {LoggingInterceptor} from './logging.interceptor';
import {UserService} from './user.service';


@Module({
	imports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema}])],
	providers: [ConfigurationService, UserService,
		{
			provide: APP_FILTER,
			useClass: HttpExceptionFilter
		},
		{
			provide: APP_INTERCEPTOR,
			useClass: LoggingInterceptor
		}],
	exports: [ConfigurationService, UserService]
})
export class SharedModule {}
