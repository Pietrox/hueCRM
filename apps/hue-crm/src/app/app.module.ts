import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from '@huecrm/components';
import {AuthenticationService} from '@huecrm/services';
import {NbAuthModule} from '@nebular/auth';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {NbButtonModule, NbLayoutModule, NbSidebarModule, NbThemeModule} from '@nebular/theme';
import {AppComponent} from './app.component';
import {NavigationModule} from './navigation/navigation.module';

@NgModule({
	
	imports: [
		NbThemeModule.forRoot(),
		NbLayoutModule,
		NbSidebarModule.forRoot(),
		NbButtonModule,
		BrowserModule,
		HttpClientModule,
		FormsModule,
		NavigationModule,
		BrowserAnimationsModule,
		NbThemeModule.forRoot({name: 'default'}),
		NbEvaIconsModule,
		NbAuthModule,
	],
	providers: [AppComponent, AuthenticationService],
	declarations: [AppComponent, LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
