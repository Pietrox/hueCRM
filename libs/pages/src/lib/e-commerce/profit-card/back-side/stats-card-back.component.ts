import {Component, OnDestroy} from '@angular/core';
import {StatsBarData} from '@huecrm/core';
import {takeWhile} from 'rxjs/operators';


@Component({
	selector: 'huecrm-stats-card-back',
	styleUrls: ['./stats-card-back.component.scss'],
	templateUrl: './stats-card-back.component.html',
})
export class StatsCardBackComponent implements OnDestroy {
	
	chartData: number[];
	private alive = true;
	
	constructor(private statsBarData: StatsBarData) {
		this.statsBarData.getStatsBarData()
			.pipe(takeWhile(() => this.alive))
			.subscribe((data) => {
				this.chartData = data;
			});
	}
	
	ngOnDestroy() {
		this.alive = false;
	}
}
