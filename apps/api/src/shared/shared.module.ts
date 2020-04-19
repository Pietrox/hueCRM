import { Module } from "@nestjs/common";
import { APP_FILTER, APP_INTERCEPTOR } from "@nestjs/core";
import { ConfigurationService } from "./configuration.service";
import { HttpExceptionFilter } from "./filters/http-exception.filter";
import { LoggingInterceptor } from "./logging.interceptor";


@Module({
	imports: [],
	providers: [ConfigurationService,
		{
			provide: APP_FILTER,
			useClass: HttpExceptionFilter
		},
		{
			provide: APP_INTERCEPTOR,
			useClass: LoggingInterceptor
		}],
	exports: [ConfigurationService]
})
export class SharedModule {}
