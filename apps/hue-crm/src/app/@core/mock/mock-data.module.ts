import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {CountryOrderService} from './country-order.service';
import {EarningService} from './earning.service';
import {ElectricityService} from './electricity.service';
import {OrdersChartService} from './orders-chart.service';
import {OrdersProfitChartService} from './orders-profit-chart.service';
import {PeriodsService} from './periods.service';
import {ProfitBarAnimationChartService} from './profit-bar-animation-chart.service';
import {ProfitChartService} from './profit-chart.service';
import {SecurityCamerasService} from './security-cameras.service';
import {SmartTableService} from './smart-table.service';
import {SolarService} from './solar.service';
import {StatsBarService} from './stats-bar.service';
import {StatsProgressBarService} from './stats-progress-bar.service';
import {TemperatureHumidityService} from './temperature-humidity.service';
import {TrafficBarService} from './traffic-bar.service';
import {TrafficChartService} from './traffic-chart.service';
import {TrafficListService} from './traffic-list.service';
import {UserActivityService} from './user-activity.service';

import {UserService} from './users.service';
import {VisitorsAnalyticsService} from './visitors-analytics.service';

const SERVICES = [
  UserService,
  ElectricityService,
  SmartTableService,
  UserActivityService,
  OrdersChartService,
  ProfitChartService,
  TrafficListService,
  PeriodsService,
  EarningService,
  OrdersProfitChartService,
  TrafficBarService,
  ProfitBarAnimationChartService,
  TemperatureHumidityService,
  SolarService,
  TrafficChartService,
  StatsBarService,
  CountryOrderService,
  StatsProgressBarService,
  VisitorsAnalyticsService,
  SecurityCamerasService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class MockDataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: MockDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
