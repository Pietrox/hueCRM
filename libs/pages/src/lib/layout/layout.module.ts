import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
	NbAccordionModule,
	NbButtonModule,
	NbCardModule,
	NbListModule,
	NbRouteTabsetModule,
	NbStepperModule,
	NbTabsetModule,
	NbUserModule,
} from '@nebular/theme';

import {ThemeModule} from '../../../../theme/src/theme.module';
import {AccordionComponent} from './accordion/accordion.component';
import {InfiniteListComponent} from './infinite-list/infinite-list.component';
import {NewsPostPlaceholderComponent} from './infinite-list/news-post-placeholder/news-post-placeholder.component';
import {NewsPostComponent} from './infinite-list/news-post/news-post.component';
import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {ListComponent} from './list/list.component';
import {NewsService} from './news.service';
import {StepperComponent} from './stepper/stepper.component';
import {Tab1Component, Tab2Component, TabsComponent} from './tabs/tabs.component';

@NgModule({
	imports: [
		FormsModule,
		ReactiveFormsModule,
		ThemeModule,
		NbTabsetModule,
		NbRouteTabsetModule,
		NbStepperModule,
		NbCardModule,
		NbButtonModule,
		NbListModule,
		NbAccordionModule,
		NbUserModule,
		LayoutRoutingModule,
	],
	declarations: [
		LayoutComponent,
		TabsComponent,
		Tab1Component,
		Tab2Component,
		StepperComponent,
		ListComponent,
		NewsPostPlaceholderComponent,
		InfiniteListComponent,
		NewsPostComponent,
		AccordionComponent,
	],
	providers: [
		NewsService,
	],
})
export class LayoutModule {
}
