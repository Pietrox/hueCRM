import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ButtonsComponent} from './buttons/buttons.component';
import {DatepickerComponent} from './datepicker/datepicker.component';
import {FormInputsComponent} from './form-inputs/form-inputs.component';
import {FormLayoutsComponent} from './form-layouts/form-layouts.component';

import {FormsComponent} from './forms.component';

const routes: Routes = [
	{
		path: '',
		component: FormsComponent,
		children: [
			{
				path: 'inputs',
				component: FormInputsComponent,
			},
			{
				path: 'layouts',
				component: FormLayoutsComponent,
			},
			{
				path: 'layouts',
				component: FormLayoutsComponent,
			},
			{
				path: 'buttons',
				component: ButtonsComponent,
			},
			{
				path: 'datepicker',
				component: DatepickerComponent,
			},
		],
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
	],
	exports: [
		RouterModule,
	],
})
export class FormsRoutingModule {
}

