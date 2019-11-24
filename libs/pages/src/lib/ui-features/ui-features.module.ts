import {NgModule} from '@angular/core';
import {NbAlertModule, NbCardModule, NbIconModule, NbPopoverModule, NbSearchModule} from '@nebular/theme';

import {ThemeModule} from '../../../../theme/src/theme.module';
import {GridComponent} from './grid/grid.component';
import {IconsComponent} from './icons/icons.component';
import {SearchComponent} from './search-fields/search-fields.component';
import {TypographyComponent} from './typography/typography.component';
import {UiFeaturesRoutingModule} from './ui-features-routing.module';
import {UiFeaturesComponent} from './ui-features.component';

const components = [
	UiFeaturesComponent,
	GridComponent,
	IconsComponent,
	TypographyComponent,
	SearchComponent,
];

@NgModule({
	imports: [
		NbCardModule,
		NbPopoverModule,
		NbSearchModule,
		NbIconModule,
		NbAlertModule,
		ThemeModule,
		UiFeaturesRoutingModule,
	],
	declarations: [
		...components,
	],
})
export class UiFeaturesModule {
}
