import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChartjsComponent} from './chartjs/chartjs.component';
import {ChartsComponent} from './charts.component';
import {D3Component} from './d3/d3.component';
import {EchartsComponent} from './echarts/echarts.component';

const routes: Routes = [{
	path: '',
	component: ChartsComponent,
	children: [{
		path: 'echarts',
		component: EchartsComponent,
	}, {
		path: 'd3',
		component: D3Component,
	}, {
		path: 'chartjs',
		component: ChartjsComponent,
	}],
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ChartsRoutingModule {
}

export const routedComponents = [
	ChartsComponent,
	EchartsComponent,
	D3Component,
	ChartjsComponent,
];
