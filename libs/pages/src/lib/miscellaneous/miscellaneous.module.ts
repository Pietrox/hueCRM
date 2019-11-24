import {NgModule} from '@angular/core';
import {NbButtonModule, NbCardModule} from '@nebular/theme';

import {ThemeModule} from '../../../../theme/src/theme.module';
import {MiscellaneousRoutingModule} from './miscellaneous-routing.module';
import {MiscellaneousComponent} from './miscellaneous.component';
import {NotFoundComponent} from './not-found/not-found.component';

@NgModule({
	imports: [
		ThemeModule,
		NbCardModule,
		NbButtonModule,
		MiscellaneousRoutingModule,
	],
	declarations: [
		MiscellaneousComponent,
		NotFoundComponent,
	],
})
export class MiscellaneousModule {
}
