import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {environment} from '../../environments/environment';
import {HomeComponent} from './home.component';
import {LeadsComponent} from './leads/leads.component';

export const pagesRoutes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{
				path: environment.LEADS_URL,
				component: LeadsComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(pagesRoutes)],
})

export class HomeRoutingModule {

}
