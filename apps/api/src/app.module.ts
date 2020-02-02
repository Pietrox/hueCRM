import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {utilities as nestWinstonModuleUtilities, WinstonModule} from 'nest-winston';
import * as winston from 'winston';
import {ApplicationController} from './app.controller';
import {ApplicationService} from './app.service';
import {AuthenticationModule} from './authentication/authentication.module';
import {LeadsModule} from './modules/leads/leads.module';
import {ConfigurationService} from './shared/configuration.service';
import {SharedModule} from './shared/shared.module';


@Module({
	imports: [
		WinstonModule.forRoot({
			transports: [
				new winston.transports.Console({
					format: winston.format.combine(
						winston.format.timestamp(),
						nestWinstonModuleUtilities.format.nestLike()
					),
				}),
				new winston.transports.File({
					dirname: process.env.LOG_DIRECTORY,
					filename: process.env.LOG_ERROR_NAME,
					level: process.env.LOG_LEVEL,
					maxsize: parseInt(process.env.LOG_MAX_SIZE, 0),
					maxFiles: parseInt(process.env.LOG_MAX_SIZE, 0)
				}),
				new winston.transports.File({
					dirname: process.env.LOG_DIRECTORY,
					filename: process.env.LOG_COMBINED_NAME,
					maxsize: parseInt(process.env.LOG_MAX_SIZE, 0),
					maxFiles: parseInt(process.env.LOG_MAX_SIZE, 0)
				})
			],
		}),
		MongooseModule.forRoot(process.env.DATABASE),
		AuthenticationModule, SharedModule,
		LeadsModule,
	],
	controllers: [ApplicationController],
	providers: [ApplicationService],
})
export class ApplicationModule {
	static host: string;
	static port: number | string;
	static devMode: boolean;
	static payloadSessionTime: string;
	static hostUrl: string;
	
	constructor(private readonly configurationService: ConfigurationService) {
		ApplicationModule.port = ApplicationModule.normalizePort(configurationService.port);
		ApplicationModule.host = configurationService.host;
		ApplicationModule.devMode = configurationService.devMode;
		ApplicationModule.payloadSessionTime = configurationService.payloadSessionTime;
		ApplicationModule.hostUrl = configurationService.hostUrl;
	}
	
	private static normalizePort(param: number | string): number | string {
		const portNumber: number = typeof param === 'string' ? parseInt(param, 10) : param;
		if (isNaN(portNumber)) {
			return param;
		} else if (portNumber >= 0) {
			return param;
		}
	}
}
