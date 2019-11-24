import {Component, OnDestroy} from '@angular/core';
import {EarningData, PieChart} from '@huecrm/core';
import {takeWhile} from 'rxjs/operators';


@Component({
	selector: 'huecrm-earning-card-back',
	styleUrls: ['./earning-card-back.component.scss'],
	templateUrl: './earning-card-back.component.html',
})
export class EarningCardBackComponent implements OnDestroy {
	earningPieChartData: PieChart[];
	name: string;
	color: string;
	value: number;
	defaultSelectedCurrency: string = 'Bitcoin';
	private alive = true;
	
	constructor(private earningService: EarningData) {
		this.earningService.getEarningPieChartData()
			.pipe(takeWhile(() => this.alive))
			.subscribe((earningPieChartData) => {
				this.earningPieChartData = earningPieChartData;
			});
	}
	
	changeChartInfo(pieData: { value: number; name: string; color: any }) {
		this.value = pieData.value;
		this.name = pieData.name;
		this.color = pieData.color;
	}
	
	ngOnDestroy() {
		this.alive = false;
	}
}
