import {Component, OnDestroy, ViewChild} from '@angular/core';
import {OrderProfitChartSummary, OrdersChart, OrdersProfitChartData, ProfitChart} from '@huecrm/core';
import {takeWhile} from 'rxjs/operators';
import {OrdersChartComponent} from './charts/orders-chart.component';
import {ProfitChartComponent} from './charts/profit-chart.component';

@Component({
	selector: 'huecrm-ecommerce-charts',
	styleUrls: ['./charts-panel.component.scss'],
	templateUrl: './charts-panel.component.html',
})
export class ECommerceChartsPanelComponent implements OnDestroy {
	
	chartPanelSummary: OrderProfitChartSummary[];
	period: string = 'week';
	ordersChartData: OrdersChart;
	profitChartData: ProfitChart;
	@ViewChild('ordersChart', {static: true}) ordersChart: OrdersChartComponent;
	@ViewChild('profitChart', {static: true}) profitChart: ProfitChartComponent;
	private alive = true;
	
	constructor(private ordersProfitChartService: OrdersProfitChartData) {
		this.ordersProfitChartService.getOrderProfitChartSummary()
			.pipe(takeWhile(() => this.alive))
			.subscribe((summary) => {
				this.chartPanelSummary = summary;
			});
		
		this.getOrdersChartData(this.period);
		this.getProfitChartData(this.period);
	}
	
	setPeriodAndGetChartData(value: string): void {
		if (this.period !== value) {
			this.period = value;
		}
		
		this.getOrdersChartData(value);
		this.getProfitChartData(value);
	}
	
	changeTab(selectedTab) {
		if (selectedTab.tabTitle === 'Profit') {
			this.profitChart.resizeChart();
		} else {
			this.ordersChart.resizeChart();
		}
	}
	
	getOrdersChartData(period: string) {
		this.ordersProfitChartService.getOrdersChartData(period)
			.pipe(takeWhile(() => this.alive))
			.subscribe(ordersChartData => {
				this.ordersChartData = ordersChartData;
			});
	}
	
	getProfitChartData(period: string) {
		this.ordersProfitChartService.getProfitChartData(period)
			.pipe(takeWhile(() => this.alive))
			.subscribe(profitChartData => {
				this.profitChartData = profitChartData;
			});
	}
	
	ngOnDestroy() {
		this.alive = false;
	}
}
