import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NbAuthModule, NbPasswordAuthStrategy} from '@nebular/auth';
import {NbEvaIconsModule} from '@nebular/eva-icons';

import {NbLayoutModule, NbThemeModule} from '@nebular/theme';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';


@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		AppRoutingModule,
		NbAuthModule.forRoot({
			strategies: [
				NbPasswordAuthStrategy.setup({
					name: 'username',
				})
			]
		}),
		NbThemeModule.forRoot({name: 'default'}),
		NbLayoutModule,
		NbEvaIconsModule
	],
	providers: [AppComponent],
	declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
