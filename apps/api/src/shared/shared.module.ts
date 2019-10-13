import {UserSchema} from '@hue-crm/schemas';
import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {ConfigurationService} from './configuration.service';
import {UserService} from './user.service';


@Module({
	imports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema}])],
  providers: [ConfigurationService, UserService],
	exports: [ConfigurationService, UserService]
})
export class SharedModule {}
