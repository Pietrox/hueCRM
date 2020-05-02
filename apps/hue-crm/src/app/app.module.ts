import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbSpinnerModule,
  NbThemeModule,
  NbToastrModule,
  NbUserModule,
  NbWindowModule
} from '@nebular/theme';
import { environment } from '../environments/environment';
import { CoreModule } from './@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth-guard.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthModule } from './auth/auth.module';


@NgModule({
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	HttpClientModule,
	AppRoutingModule,
	NbThemeModule.forRoot({ name: 'default' }),
	NbSidebarModule.forRoot(),
	NbEvaIconsModule,
	NbMenuModule.forRoot(),
	NbDatepickerModule.forRoot(),
	NbDialogModule.forRoot(),
	NbWindowModule.forRoot(),
	NbToastrModule.forRoot(),
	NbSidebarModule.forRoot(),
	NbMenuModule.forRoot(),
	NbSpinnerModule,
	CoreModule.forRoot(),
	NbEvaIconsModule,
	NbUserModule,
	AuthModule,
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
		})
	  ],
	  forms: {
		login: {
		  redirectDelay: 1,
		  showMessages: {
			success: true
		  }
		}
	  }
	})
  ],
  providers: [AppComponent, AuthGuard,
	{
	  provide: HTTP_INTERCEPTORS,
	  useClass: AuthInterceptor,
	  multi: true
	}
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
