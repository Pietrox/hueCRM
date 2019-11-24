import {Component, Input, OnDestroy} from '@angular/core';
import {TrafficList} from '@huecrm/core';
import {NbThemeService} from '@nebular/theme';
import {takeWhile} from 'rxjs/operators';


@Component({
	selector: 'huecrm-traffic-front-card',
	styleUrls: ['./traffic-front-card.component.scss'],
	templateUrl: './traffic-front-card.component.html',
})
export class TrafficFrontCardComponent implements OnDestroy {
	
	@Input() frontCardData: TrafficList;
	currentTheme: string;
	private alive = true;
	
	constructor(private themeService: NbThemeService) {
		this.themeService.getJsTheme()
			.pipe(takeWhile(() => this.alive))
			.subscribe(theme => {
				this.currentTheme = theme.name;
			});
	}
	
	trackByDate(_, item) {
		return item.date;
	}
	
	ngOnDestroy() {
		this.alive = false;
	}
}
