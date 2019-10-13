import {Module} from '@nestjs/common';
import {SharedModule} from '../shared/shared.module';
import {AuthenticationController} from './authentication.controller';
import {AuthenticationService} from './authentication.service';

@Module({
	imports: [SharedModule],
	providers: [AuthenticationService],
	controllers: [AuthenticationController]
})
export class AuthenticationModule {
}
