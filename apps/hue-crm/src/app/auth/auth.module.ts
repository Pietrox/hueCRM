import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy} from '@nebular/auth';
import {NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule} from '@nebular/theme';
import {environment} from '../../environments/environment';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthInterceptor} from './auth.interceptor';
import {LoginComponent} from './login/login.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule,
		NbAlertModule,
		NbInputModule,
		NbButtonModule,
		NbCheckboxModule,
		AuthRoutingModule,
		NbAuthModule.forRoot({
			strategies: [
				NbPasswordAuthStrategy.setup({
					name: 'email',
					baseEndpoint: environment.BACKEND_URL,
					login: {
						endpoint: environment.LOGIN,
						redirect: {
							success: environment.HOME_URL,
							failure: null
						}
					},
					register: {
						endpoint: environment.REGISTER,
						redirect: {
							success: environment.HOME_URL,
							failure: null
						}
					},
					token: {
						class: NbAuthJWTToken,
						key: 'token'
					}
				}),
			],
			forms: {
				login: {
					redirectDelay: 1,
					showMessages: {
						success: true,
					}
				}
			}
		}),
	],
	declarations: [
		LoginComponent,
	],
	providers: [{
		provide: HTTP_INTERCEPTORS,
		useClass: AuthInterceptor,
		multi: true
	}]
})
export class AuthModule {

}
