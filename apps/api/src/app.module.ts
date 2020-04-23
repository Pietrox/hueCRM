import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApplicationController } from './app.controller';
import { ApplicationService } from './app.service';
import { LeadsModule } from './modules/leads/leads.module';
import { ModuleModelsModule } from './modules/module-models/module-models.module';
import { AuthenticationModule } from './shared/authentication/authentication.module';
import { ConfigurationService } from './shared/configuration.service';
import { SharedModule } from './shared/shared.module';


@Module({
  imports: [
	MongooseModule.forRoot(process.env.DATABASE),
	AuthenticationModule, SharedModule,
	ModuleModelsModule, LeadsModule
  ],
  controllers: [ApplicationController],
  providers: [ApplicationService]
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
