import {NgModule} from '@angular/core';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {
	NbButtonModule,
	NbCardModule,
	NbIconModule,
	NbListModule,
	NbProgressBarModule,
	NbSelectModule,
	NbTabsetModule,
	NbUserModule,
} from '@nebular/theme';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ChartModule} from 'angular2-chartjs';
import {NgxEchartsModule} from 'ngx-echarts';

import {ThemeModule} from '../../../../theme/src/theme.module';
import {ChartPanelHeaderComponent} from './charts-panel/chart-panel-header/chart-panel-header.component';
import {ChartPanelSummaryComponent} from './charts-panel/chart-panel-summary/chart-panel-summary.component';
import {ECommerceChartsPanelComponent} from './charts-panel/charts-panel.component';
import {OrdersChartComponent} from './charts-panel/charts/orders-chart.component';
import {ProfitChartComponent} from './charts-panel/charts/profit-chart.component';
import {CountryOrdersChartComponent} from './country-orders/chart/country-orders-chart.component';

import {CountryOrdersComponent} from './country-orders/country-orders.component';
import {CountryOrdersMapComponent} from './country-orders/map/country-orders-map.component';
import {CountryOrdersMapService} from './country-orders/map/country-orders-map.service';
import {ECommerceComponent} from './e-commerce.component';
import {EarningCardBackComponent} from './earning-card/back-side/earning-card-back.component';
import {EarningPieChartComponent} from './earning-card/back-side/earning-pie-chart.component';
import {EarningCardComponent} from './earning-card/earning-card.component';
import {EarningCardFrontComponent} from './earning-card/front-side/earning-card-front.component';
import {EarningLiveUpdateChartComponent} from './earning-card/front-side/earning-live-update-chart.component';
import {ECommerceLegendChartComponent} from './legend-chart/legend-chart.component';
import {StatsAreaChartComponent} from './profit-card/back-side/stats-area-chart.component';
import {StatsCardBackComponent} from './profit-card/back-side/stats-card-back.component';
import {StatsBarAnimationChartComponent} from './profit-card/front-side/stats-bar-animation-chart.component';
import {StatsCardFrontComponent} from './profit-card/front-side/stats-card-front.component';
import {ProfitCardComponent} from './profit-card/profit-card.component';
import {ECommerceProgressSectionComponent} from './progress-section/progress-section.component';
import {SlideOutComponent} from './slide-out/slide-out.component';
import {TrafficBackCardComponent} from './traffic-reveal-card/back-side/traffic-back-card.component';
import {TrafficBarChartComponent} from './traffic-reveal-card/back-side/traffic-bar-chart.component';
import {TrafficBarComponent} from './traffic-reveal-card/front-side/traffic-bar/traffic-bar.component';
import {TrafficFrontCardComponent} from './traffic-reveal-card/front-side/traffic-front-card.component';
import {TrafficCardsHeaderComponent} from './traffic-reveal-card/traffic-cards-header/traffic-cards-header.component';
import {TrafficRevealCardComponent} from './traffic-reveal-card/traffic-reveal-card.component';
import {ECommerceUserActivityComponent} from './user-activity/user-activity.component';
import {ECommerceVisitorsAnalyticsChartComponent,} from './visitors-analytics/visitors-analytics-chart/visitors-analytics-chart.component';
import {ECommerceVisitorsAnalyticsComponent,} from './visitors-analytics/visitors-analytics.component';
import {ECommerceVisitorsStatisticsComponent,} from './visitors-analytics/visitors-statistics/visitors-statistics.component';

@NgModule({
	imports: [
		ThemeModule,
		NbCardModule,
		NbUserModule,
		NbButtonModule,
		NbIconModule,
		NbTabsetModule,
		NbSelectModule,
		NbListModule,
		ChartModule,
		NbProgressBarModule,
		NgxEchartsModule,
		NgxChartsModule,
		LeafletModule,
	],
	declarations: [
		ECommerceComponent,
		StatsCardFrontComponent,
		StatsAreaChartComponent,
		StatsBarAnimationChartComponent,
		ProfitCardComponent,
		ECommerceChartsPanelComponent,
		ChartPanelHeaderComponent,
		ChartPanelSummaryComponent,
		OrdersChartComponent,
		ProfitChartComponent,
		StatsCardBackComponent,
		TrafficRevealCardComponent,
		TrafficBarChartComponent,
		TrafficFrontCardComponent,
		TrafficBackCardComponent,
		TrafficBarComponent,
		TrafficCardsHeaderComponent,
		CountryOrdersComponent,
		CountryOrdersMapComponent,
		CountryOrdersChartComponent,
		ECommerceVisitorsAnalyticsComponent,
		ECommerceVisitorsAnalyticsChartComponent,
		ECommerceVisitorsStatisticsComponent,
		ECommerceLegendChartComponent,
		ECommerceUserActivityComponent,
		ECommerceProgressSectionComponent,
		SlideOutComponent,
		EarningCardComponent,
		EarningCardFrontComponent,
		EarningCardBackComponent,
		EarningPieChartComponent,
		EarningLiveUpdateChartComponent,
	],
	providers: [
		CountryOrdersMapService,
	],
})
export class ECommerceModule {
}
