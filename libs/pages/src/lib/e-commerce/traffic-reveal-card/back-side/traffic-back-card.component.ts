import {Component, Input, OnDestroy} from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {takeWhile} from 'rxjs/operators';

@Component({
	selector: 'huecrm-traffic-back-card',
	styleUrls: ['./traffic-back-card.component.scss'],
	templateUrl: './traffic-back-card.component.html',
})
export class TrafficBackCardComponent implements OnDestroy {
	
	@Input() trafficBarData: any;
	currentTheme: string;
	private alive = true;
	
	constructor(private themeService: NbThemeService) {
		this.themeService.getJsTheme()
			.pipe(takeWhile(() => this.alive))
			.subscribe(theme => {
				this.currentTheme = theme.name;
			});
	}
	
	ngOnDestroy() {
		this.alive = false;
	}
}
