import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccordionComponent} from './accordion/accordion.component';
import {InfiniteListComponent} from './infinite-list/infinite-list.component';

import {LayoutComponent} from './layout.component';
import {ListComponent} from './list/list.component';
import {StepperComponent} from './stepper/stepper.component';
import {Tab1Component, Tab2Component, TabsComponent} from './tabs/tabs.component';

const routes: Routes = [{
	path: '',
	component: LayoutComponent,
	children: [
		{
			path: 'stepper',
			component: StepperComponent,
		},
		{
			path: 'list',
			component: ListComponent,
		},
		{
			path: 'infinite-list',
			component: InfiniteListComponent,
		},
		{
			path: 'accordion',
			component: AccordionComponent,
		},
		{
			path: 'tabs',
			component: TabsComponent,
			children: [
				{
					path: '',
					redirectTo: 'tab1',
					pathMatch: 'full',
				},
				{
					path: 'tab1',
					component: Tab1Component,
				},
				{
					path: 'tab2',
					component: Tab2Component,
				},
			],
		},
	],
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LayoutRoutingModule {
}
