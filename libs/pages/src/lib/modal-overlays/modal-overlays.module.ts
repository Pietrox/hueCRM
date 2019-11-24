import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
	NbButtonModule,
	NbCardModule,
	NbCheckboxModule,
	NbDialogModule,
	NbInputModule,
	NbPopoverModule,
	NbSelectModule,
	NbTabsetModule,
	NbTooltipModule,
	NbWindowModule,
} from '@nebular/theme';
// modules
import {ThemeModule} from '../../../../theme/src/theme.module';
import {DialogNamePromptComponent} from './dialog/dialog-name-prompt/dialog-name-prompt.component';
import {DialogComponent} from './dialog/dialog.component';
import {ShowcaseDialogComponent} from './dialog/showcase-dialog/showcase-dialog.component';
import {ModalOverlaysRoutingModule} from './modal-overlays-routing.module';
// components
import {ModalOverlaysComponent} from './modal-overlays.component';
import {NgxPopoverCardComponent, NgxPopoverFormComponent, NgxPopoverTabsComponent,} from './popovers/popover-examples.component';
import {PopoversComponent} from './popovers/popovers.component';
import {ToastrComponent} from './toastr/toastr.component';
import {TooltipComponent} from './tooltip/tooltip.component';
import {WindowFormComponent} from './window/window-form/window-form.component';
import {WindowComponent} from './window/window.component';


const COMPONENTS = [
	ModalOverlaysComponent,
	ToastrComponent,
	DialogComponent,
	ShowcaseDialogComponent,
	DialogNamePromptComponent,
	WindowComponent,
	WindowFormComponent,
	PopoversComponent,
	NgxPopoverCardComponent,
	NgxPopoverFormComponent,
	NgxPopoverTabsComponent,
	TooltipComponent,
];

const ENTRY_COMPONENTS = [
	ShowcaseDialogComponent,
	DialogNamePromptComponent,
	WindowFormComponent,
	NgxPopoverCardComponent,
	NgxPopoverFormComponent,
	NgxPopoverTabsComponent,
];

const MODULES = [
	FormsModule,
	ThemeModule,
	ModalOverlaysRoutingModule,
	NbDialogModule.forChild(),
	NbWindowModule.forChild(),
	NbCardModule,
	NbCheckboxModule,
	NbTabsetModule,
	NbPopoverModule,
	NbButtonModule,
	NbInputModule,
	NbSelectModule,
	NbTooltipModule,
];

const SERVICES = [];

@NgModule({
	imports: [
		...MODULES,
	],
	declarations: [
		...COMPONENTS,
	],
	providers: [
		...SERVICES,
	],
	entryComponents: [
		...ENTRY_COMPONENTS,
	],
})
export class ModalOverlaysModule {
}
