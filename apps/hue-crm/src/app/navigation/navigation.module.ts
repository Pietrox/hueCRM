import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from '../app.component';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule.forRoot([
			{
				path: '',
				component: AppComponent
			},
			{
				path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
			}
		])
	],
	exports: [RouterModule]
})
export class NavigationModule {
}
