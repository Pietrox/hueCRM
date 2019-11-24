import {Component, OnDestroy} from '@angular/core';
import {TrafficBar, TrafficBarData, TrafficList, TrafficListData} from '@huecrm/core';
import {takeWhile} from 'rxjs/operators';

@Component({
	selector: 'huecrm-traffic-reveal-card',
	styleUrls: ['./traffic-reveal-card.component.scss'],
	templateUrl: './traffic-reveal-card.component.html',
})
export class TrafficRevealCardComponent implements OnDestroy {
	
	trafficBarData: TrafficBar;
	trafficListData: TrafficList;
	revealed = false;
	period: string = 'week';
	private alive = true;
	
	constructor(private trafficListService: TrafficListData,
	            private trafficBarService: TrafficBarData) {
		this.getTrafficFrontCardData(this.period);
		this.getTrafficBackCardData(this.period);
	}
	
	toggleView() {
		this.revealed = !this.revealed;
	}
	
	setPeriodAngGetData(value: string): void {
		this.period = value;
		
		this.getTrafficFrontCardData(value);
		this.getTrafficBackCardData(value);
	}
	
	getTrafficBackCardData(period: string) {
		this.trafficBarService.getTrafficBarData(period)
			.pipe(takeWhile(() => this.alive))
			.subscribe(trafficBarData => {
				this.trafficBarData = trafficBarData;
			});
	}
	
	getTrafficFrontCardData(period: string) {
		this.trafficListService.getTrafficListData(period)
			.pipe(takeWhile(() => this.alive))
			.subscribe(trafficListData => {
				this.trafficListData = trafficListData;
			});
	}
	
	ngOnDestroy() {
		this.alive = false;
	}
}
