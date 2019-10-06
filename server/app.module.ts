import { Module } from '@nestjs/common';
import { AngularUniversalModule, applyDomino } from '@nestjs/ng-universal';
import { join } from 'path';
import {ApplicationController} from './app.controller';
import {ApplicationService} from './app.service';
import {ConfigurationService} from './shared/configuration/configuration.service';
import {UserModule} from './users/user.module';
import {SharedModule} from './shared/shared.module';

const BROWSER_DIR = join(process.cwd(), 'dist/browser');
applyDomino(global, join(BROWSER_DIR, 'index.html'));

@Module({
  imports: [UserModule, SharedModule,
    AngularUniversalModule.forRoot({
      viewsPath: BROWSER_DIR,
      bundle: require('../server/main'),
      liveReload: true,
    }),
  ],
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
