import {NgModule} from '@angular/core';
import {NbMenuModule} from '@nebular/theme';

import {ThemeModule} from '../../../theme/src/theme.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {ECommerceModule} from './e-commerce/e-commerce.module';
import {MiscellaneousModule} from './miscellaneous/miscellaneous.module';
import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';

@NgModule({
	imports: [
		PagesRoutingModule,
		ThemeModule,
		NbMenuModule,
		DashboardModule,
		ECommerceModule,
		MiscellaneousModule,
	],
	declarations: [
		PagesComponent,
	],
})
export class PagesModule {
}
