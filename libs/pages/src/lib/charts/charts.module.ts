import {NgModule} from '@angular/core';
import {NbCardModule} from '@nebular/theme';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ChartModule} from 'angular2-chartjs';
import {NgxEchartsModule} from 'ngx-echarts';

import {ThemeModule} from '../../../../theme/src/theme.module';
import {ChartjsBarHorizontalComponent} from './chartjs/chartjs-bar-horizontal.component';
import {ChartjsBarComponent} from './chartjs/chartjs-bar.component';
import {ChartjsLineComponent} from './chartjs/chartjs-line.component';
import {ChartjsMultipleXaxisComponent} from './chartjs/chartjs-multiple-xaxis.component';
import {ChartjsPieComponent} from './chartjs/chartjs-pie.component';
import {ChartjsRadarComponent} from './chartjs/chartjs-radar.component';

import {ChartsRoutingModule, routedComponents} from './charts-routing.module';
import {D3AdvancedPieComponent} from './d3/d3-advanced-pie.component';
import {D3AreaStackComponent} from './d3/d3-area-stack.component';
import {D3BarComponent} from './d3/d3-bar.component';
import {D3LineComponent} from './d3/d3-line.component';
import {D3PieComponent} from './d3/d3-pie.component';
import {D3PolarComponent} from './d3/d3-polar.component';
import {EchartsAreaStackComponent} from './echarts/echarts-area-stack.component';
import {EchartsBarAnimationComponent} from './echarts/echarts-bar-animation.component';
import {EchartsBarComponent} from './echarts/echarts-bar.component';
import {EchartsLineComponent} from './echarts/echarts-line.component';
import {EchartsMultipleXaxisComponent} from './echarts/echarts-multiple-xaxis.component';
import {EchartsPieComponent} from './echarts/echarts-pie.component';
import {EchartsRadarComponent} from './echarts/echarts-radar.component';

const components = [
	ChartjsBarComponent,
	ChartjsLineComponent,
	ChartjsPieComponent,
	ChartjsMultipleXaxisComponent,
	ChartjsBarHorizontalComponent,
	ChartjsRadarComponent,
	D3BarComponent,
	D3LineComponent,
	D3PieComponent,
	D3AreaStackComponent,
	D3PolarComponent,
	D3AdvancedPieComponent,
	EchartsLineComponent,
	EchartsPieComponent,
	EchartsBarComponent,
	EchartsMultipleXaxisComponent,
	EchartsAreaStackComponent,
	EchartsBarAnimationComponent,
	EchartsRadarComponent,
];

@NgModule({
	imports: [
		ThemeModule,
		ChartsRoutingModule,
		NgxEchartsModule,
		NgxChartsModule,
		ChartModule,
		NbCardModule,
	],
	declarations: [...routedComponents, ...components],
})
export class ChartsModule {
}
