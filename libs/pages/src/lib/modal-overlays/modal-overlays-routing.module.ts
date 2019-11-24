import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DialogComponent} from './dialog/dialog.component';
import {ModalOverlaysComponent} from './modal-overlays.component';
import {PopoversComponent} from './popovers/popovers.component';
import {ToastrComponent} from './toastr/toastr.component';
import {TooltipComponent} from './tooltip/tooltip.component';
import {WindowComponent} from './window/window.component';

const routes: Routes = [{
	path: '',
	component: ModalOverlaysComponent,
	children: [
		{
			path: 'dialog',
			component: DialogComponent,
		},
		{
			path: 'window',
			component: WindowComponent,
		},
		{
			path: 'popover',
			component: PopoversComponent,
		},
		{
			path: 'tooltip',
			component: TooltipComponent,
		},
		{
			path: 'toastr',
			component: ToastrComponent,
		},
	],
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ModalOverlaysRoutingModule {
}


