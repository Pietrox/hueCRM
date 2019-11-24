import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from '@huecrm/components';
import {CoreModule} from '@huecrm/core';
import {AuthenticationService} from '@huecrm/services';
import {ThemeModule} from '@huecrm/theme';
import {NbAuthModule, NbPasswordAuthStrategy} from '@nebular/auth';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {
	NbButtonModule,
	NbChatModule,
	NbDatepickerModule,
	NbDialogModule,
	NbLayoutModule,
	NbMenuModule,
	NbSidebarModule,
	NbThemeModule,
	NbToastrModule,
	NbWindowModule
} from '@nebular/theme';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing.module';

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		AppRoutingModule,
		ThemeModule.forRoot(),
		NbSidebarModule.forRoot(),
		NbMenuModule.forRoot(),
		NbDatepickerModule.forRoot(),
		NbDialogModule.forRoot(),
		NbWindowModule.forRoot(),
		NbToastrModule.forRoot(),
		NbEvaIconsModule,
		NbButtonModule,
		NbLayoutModule,
		NbThemeModule,
		NbChatModule.forRoot({
			messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY'
		}),
		CoreModule.forRoot(),
		NbAuthModule.forRoot({
			strategies: [
				NbPasswordAuthStrategy.setup({
					name: 'username'
				})
			],
			forms: {}
		})
	],
	providers: [AppComponent, AuthenticationService],
	declarations: [AppComponent, LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
