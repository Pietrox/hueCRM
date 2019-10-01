import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UserModule} from './users/user.module';
import {ConfigurationService} from './shared/configuration/configuration.service';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  static host: string;
  static port: number | string;
  static devMode: boolean;

  constructor(private readonly configurationService: ConfigurationService) {
    AppModule.port = AppModule.normalizePort(configurationService.port);
    AppModule.host = configurationService.host;
    AppModule.devMode = configurationService.devMode;
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
