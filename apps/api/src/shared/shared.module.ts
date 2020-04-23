import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { AuthenticationModule } from './authentication/authentication.module';
import { ConfigurationService } from './configuration.service';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { LoggingInterceptor } from './logging.interceptor';


@Module({
  imports: [AuthenticationModule],
  providers: [ConfigurationService,
	{
	  provide: APP_FILTER,
	  useClass: HttpExceptionFilter
	},
	{
	  provide: APP_INTERCEPTOR,
	  useClass: LoggingInterceptor
	}],
  exports: [ConfigurationService, AuthenticationModule]
})
export class SharedModule {
}
