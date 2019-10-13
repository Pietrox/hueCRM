import {Module} from '@nestjs/common';
import {ConfigurationService} from '../shared/configuration.service';
import {SharedModule} from '../shared/shared.module';
import {ApplicationController} from './app.controller';
import {ApplicationService} from './app.service';


@Module({
  imports: [SharedModule],
  controllers: [ApplicationController],
  providers: [ApplicationService],
})
export class ApplicationModule {
  static host: string;
  static port: number | string;
  static devMode: boolean;
  static payloadSessionTime: string;
  
  constructor(private readonly configurationService: ConfigurationService) {
    ApplicationModule.port = ApplicationModule.normalizePort(configurationService.port);
    ApplicationModule.host = configurationService.host;
    ApplicationModule.devMode = configurationService.devMode;
    ApplicationModule.payloadSessionTime = configurationService.payloadSessionTime;
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
