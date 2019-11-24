import {Component, OnDestroy} from '@angular/core';
import {ProgressInfo, StatsProgressBarData} from '@huecrm/core';
import {takeWhile} from 'rxjs/operators';


@Component({
	selector: 'huecrm-progress-section',
	styleUrls: ['./progress-section.component.scss'],
	templateUrl: './progress-section.component.html',
})
export class ECommerceProgressSectionComponent implements OnDestroy {
	
	progressInfoData: ProgressInfo[];
	private alive = true;
	
	constructor(private statsProgressBarService: StatsProgressBarData) {
		this.statsProgressBarService.getProgressInfoData()
			.pipe(takeWhile(() => this.alive))
			.subscribe((data) => {
				this.progressInfoData = data;
			});
	}
	
	ngOnDestroy() {
		this.alive = true;
	}
}
