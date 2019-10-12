import {Module} from '@nestjs/common';
import {ConfigurationService} from '../shared/configuration/configuration.service';
import {SharedModule} from '../shared/shared.module';
import {UserModule} from '../users/user.module';
import {ApplicationController} from './app.controller';
import {ApplicationService} from './app.service';

@Module({
  imports: [UserModule, SharedModule],
  controllers: [ApplicationController],
  providers: [ApplicationService],
})
export class ApplicationModule {
  static host: string;
  static port: number | string;
  static devMode: boolean;
  
  constructor(private readonly configurationService: ConfigurationService) {
    ApplicationModule.port = ApplicationModule.normalizePort(configurationService.port);
    ApplicationModule.host = configurationService.host;
    ApplicationModule.devMode = configurationService.devMode;
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
