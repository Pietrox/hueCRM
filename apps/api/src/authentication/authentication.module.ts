import {Module} from '@nestjs/common';
import {SharedModule} from '../shared/shared.module';
import {AuthenticationJwtStrategy} from './authentication-jwt.strategy';
import {AuthenticationController} from './authentication.controller';
import {AuthenticationService} from './authentication.service';

@Module({
	imports: [SharedModule],
	providers: [AuthenticationService, AuthenticationJwtStrategy],
	controllers: [AuthenticationController]
})
export class AuthenticationModule {
}
