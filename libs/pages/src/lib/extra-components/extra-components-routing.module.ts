import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AlertComponent} from './alert/alert.component';
import {CalendarKitFullCalendarShowcaseComponent} from './calendar-kit/calendar-kit.component';
import {CalendarComponent} from './calendar/calendar.component';
import {ChatComponent} from './chat/chat.component';

import {ExtraComponentsComponent} from './extra-components.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {SpinnerComponent} from './spinner/spinner.component';

const routes: Routes = [{
	path: '',
	component: ExtraComponentsComponent,
	children: [
		{
			path: 'calendar',
			component: CalendarComponent,
		},
		{
			path: 'progress-bar',
			component: ProgressBarComponent,
		},
		{
			path: 'spinner',
			component: SpinnerComponent,
		},
		{
			path: 'alert',
			component: AlertComponent,
		},
		{
			path: 'calendar-kit',
			component: CalendarKitFullCalendarShowcaseComponent,
		},
		{
			path: 'chat',
			component: ChatComponent,
		},
	],
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ExtraComponentsRoutingModule {
}
