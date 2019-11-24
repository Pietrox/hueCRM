import {Component, OnDestroy} from '@angular/core';
import {Electricity, ElectricityChart, ElectricityData} from '@huecrm/core';
import {NbThemeService} from '@nebular/theme';
import {forkJoin} from 'rxjs';
import {takeWhile} from 'rxjs/operators';

@Component({
	selector: 'huecrm-electricity',
	styleUrls: ['./electricity.component.scss'],
	templateUrl: './electricity.component.html',
})
export class ElectricityComponent implements OnDestroy {
	
	listData: Electricity[];
	chartData: ElectricityChart[];
	type = 'week';
	types = ['week', 'month', 'year'];
	currentTheme: string;
	themeSubscription: any;
	private alive = true;
	
	constructor(private electricityService: ElectricityData,
	            private themeService: NbThemeService) {
		this.themeService.getJsTheme()
			.pipe(takeWhile(() => this.alive))
			.subscribe(theme => {
				this.currentTheme = theme.name;
			});
		
		forkJoin(
			this.electricityService.getListData(),
			this.electricityService.getChartData(),
		)
			.pipe(takeWhile(() => this.alive))
			.subscribe(([listData, chartData]: [Electricity[], ElectricityChart[]]) => {
				this.listData = listData;
				this.chartData = chartData;
			});
	}
	
	ngOnDestroy() {
		this.alive = false;
	}
}
