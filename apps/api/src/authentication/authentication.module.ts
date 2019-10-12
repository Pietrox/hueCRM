import {Module} from '@nestjs/common';
import {AuthenticationService} from './authentication.service';

@Module({
	providers: [AuthenticationService]
})
export class AuthenticationModule {
}
