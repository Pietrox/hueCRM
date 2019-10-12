import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NbThemeModule} from '@nebular/theme';

import {AppComponent} from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [NbThemeModule.forRoot(), BrowserModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
