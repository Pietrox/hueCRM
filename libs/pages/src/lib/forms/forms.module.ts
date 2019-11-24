import {NgModule} from '@angular/core';
import {FormsModule as ngFormsModule} from '@angular/forms';
import {
	NbActionsModule,
	NbButtonModule,
	NbCardModule,
	NbCheckboxModule,
	NbDatepickerModule,
	NbIconModule,
	NbInputModule,
	NbRadioModule,
	NbSelectModule,
	NbUserModule,
} from '@nebular/theme';

import {ThemeModule} from '../../../../theme/src/theme.module';
import {ButtonsComponent} from './buttons/buttons.component';
import {DatepickerComponent} from './datepicker/datepicker.component';
import {FormInputsComponent} from './form-inputs/form-inputs.component';
import {FormLayoutsComponent} from './form-layouts/form-layouts.component';
import {FormsRoutingModule} from './forms-routing.module';
import {FormsComponent} from './forms.component';

@NgModule({
	imports: [
		ThemeModule,
		NbInputModule,
		NbCardModule,
		NbButtonModule,
		NbActionsModule,
		NbUserModule,
		NbCheckboxModule,
		NbRadioModule,
		NbDatepickerModule,
		FormsRoutingModule,
		NbSelectModule,
		NbIconModule,
		ngFormsModule,
	],
	declarations: [
		FormsComponent,
		ButtonsComponent,
		FormInputsComponent,
		FormLayoutsComponent,
		DatepickerComponent,
	],
})
export class FormsModule {
}
