import {HttpModule, Module} from '@nestjs/common';
import {ConfigurationService} from './configuration.service';
import {UserService} from './user/user.service';

@Module({
  imports: [HttpModule],
  exports: [ConfigurationService, UserService],
  providers: [ConfigurationService, UserService],
})
export class SharedModule {}
