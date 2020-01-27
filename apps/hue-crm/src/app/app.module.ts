import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NbEvaIconsModule} from '@nebular/eva-icons';
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
import {CoreModule} from './@core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthGuard} from './auth-guard.service';
import {AuthModule} from './auth/auth.module';


@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		AppRoutingModule,
		NbThemeModule.forRoot({name: 'default'}),
		NbSidebarModule,
		NbMenuModule,
		NbDatepickerModule,
		NbDialogModule.forRoot(),
		NbWindowModule.forRoot(),
		NbToastrModule.forRoot(),
		NbSidebarModule.forRoot(),
		NbMenuModule.forRoot(),
		NbSpinnerModule,
		CoreModule,
		NbEvaIconsModule,
		NbUserModule,
		AuthModule,
	],
	providers: [AppComponent, AuthGuard],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})
export class AppModule {
}
