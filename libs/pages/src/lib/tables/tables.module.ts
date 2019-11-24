import {NgModule} from '@angular/core';
import {NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';

import {ThemeModule} from '../../../../theme/src/theme.module';
import {routedComponents, TablesRoutingModule} from './tables-routing.module';
import {FsIconComponent} from './tree-grid/tree-grid.component';

@NgModule({
	imports: [
		NbCardModule,
		NbTreeGridModule,
		NbIconModule,
		NbInputModule,
		ThemeModule,
		TablesRoutingModule,
		Ng2SmartTableModule,
	],
	declarations: [
		...routedComponents,
		FsIconComponent,
	],
})
export class TablesModule {
}
