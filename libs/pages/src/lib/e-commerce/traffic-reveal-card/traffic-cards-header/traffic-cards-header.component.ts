import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {takeWhile} from 'rxjs/operators';

@Component({
	selector: 'huecrm-traffic-cards-header',
	styleUrls: ['./traffic-cards-header.component.scss'],
	templateUrl: './traffic-cards-header.component.html',
})
export class TrafficCardsHeaderComponent implements OnDestroy {
	@Output() periodChange = new EventEmitter<string>();
	@Input() type: string = 'week';
	types: string[] = ['week', 'month', 'year'];
	currentTheme: string;
	private alive = true;
	
	constructor(private themeService: NbThemeService) {
		this.themeService.getJsTheme()
			.pipe(takeWhile(() => this.alive))
			.subscribe(theme => {
				this.currentTheme = theme.name;
			});
	}
	
	changePeriod(period: string): void {
		this.type = period;
		this.periodChange.emit(period);
	}
	
	ngOnDestroy() {
		this.alive = false;
	}
}
