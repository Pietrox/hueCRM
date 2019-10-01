import {HttpModule, Module} from '@nestjs/common';
import {ConfigurationService} from './configuration/configuration.service';

@Module({
  imports: [HttpModule],
  exports: [ConfigurationService],
  providers: [ConfigurationService],
})
export class SharedModule {}
