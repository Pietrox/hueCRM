import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NbAuthModule} from '@nebular/auth';
import {
	NbActionsModule,
	NbCardModule,
	NbIconModule,
	NbLayoutModule,
	NbMenuModule,
	NbMenuService,
	NbSidebarModule,
	NbSidebarService,
	NbSpinnerModule,
	NbUserModule
} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {HeaderComponent} from '../header/header.component';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {LeadsComponent} from './leads/leads.component';
import {MenuComponent} from './menu/menu.component';


@NgModule({
	declarations: [HomeComponent, HeaderComponent, LeadsComponent, MenuComponent],
	imports: [
		HomeRoutingModule,
		RouterModule,
		NbUserModule,
		NbLayoutModule,
		NbActionsModule,
		NbIconModule,
		CommonModule,
		NbAuthModule,
		NbSidebarModule,
		NbMenuModule,
		Ng2SmartTableModule,
		NbCardModule,
		NbSpinnerModule
	],
	providers: [NbSidebarService, NbMenuService]
})
export class HomeModule {
}
