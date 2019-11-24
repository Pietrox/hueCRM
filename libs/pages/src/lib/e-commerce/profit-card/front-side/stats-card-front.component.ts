import {Component} from '@angular/core';
import {ProfitBarAnimationChartData} from '@huecrm/core';
import {takeWhile} from 'rxjs/operators';


@Component({
	selector: 'huecrm-stats-card-front',
	styleUrls: ['./stats-card-front.component.scss'],
	templateUrl: './stats-card-front.component.html',
})
export class StatsCardFrontComponent {
	
	linesData: { firstLine: number[]; secondLine: number[] };
	private alive = true;
	
	constructor(private profitBarAnimationChartService: ProfitBarAnimationChartData) {
		this.profitBarAnimationChartService.getChartData()
			.pipe(takeWhile(() => this.alive))
			.subscribe((linesData) => {
				this.linesData = linesData;
			});
	}
}
