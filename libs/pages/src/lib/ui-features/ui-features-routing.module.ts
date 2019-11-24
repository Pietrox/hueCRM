import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GridComponent} from './grid/grid.component';
import {IconsComponent} from './icons/icons.component';
import {SearchComponent} from './search-fields/search-fields.component';
import {TypographyComponent} from './typography/typography.component';

import {UiFeaturesComponent} from './ui-features.component';

const routes: Routes = [{
	path: '',
	component: UiFeaturesComponent,
	children: [{
		path: 'grid',
		component: GridComponent,
	}, {
		path: 'icons',
		component: IconsComponent,
	}, {
		path: 'typography',
		component: TypographyComponent,
	}, {
		path: 'search-fields',
		component: SearchComponent,
	}],
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class UiFeaturesRoutingModule {
}
