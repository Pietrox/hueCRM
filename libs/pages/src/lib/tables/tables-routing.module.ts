import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SmartTableComponent} from './smart-table/smart-table.component';

import {TablesComponent} from './tables.component';
import {TreeGridComponent} from './tree-grid/tree-grid.component';

const routes: Routes = [{
	path: '',
	component: TablesComponent,
	children: [
		{
			path: 'smart-table',
			component: SmartTableComponent,
		},
		{
			path: 'tree-grid',
			component: TreeGridComponent,
		},
	],
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TablesRoutingModule {
}

export const routedComponents = [
	TablesComponent,
	SmartTableComponent,
	TreeGridComponent,
];
