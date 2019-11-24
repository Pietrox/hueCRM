import {Component, OnDestroy} from '@angular/core';
import {UserActive, UserActivityData} from '@huecrm/core';
import {NbThemeService} from '@nebular/theme';
import {takeWhile} from 'rxjs/operators';


@Component({
	selector: 'huecrm-user-activity',
	styleUrls: ['./user-activity.component.scss'],
	templateUrl: './user-activity.component.html',
})
export class ECommerceUserActivityComponent implements OnDestroy {
	
	userActivity: UserActive[] = [];
	type = 'month';
	types = ['week', 'month', 'year'];
	currentTheme: string;
	private alive = true;
	
	constructor(private themeService: NbThemeService,
	            private userActivityService: UserActivityData) {
		this.themeService.getJsTheme()
			.pipe(takeWhile(() => this.alive))
			.subscribe(theme => {
				this.currentTheme = theme.name;
			});
		
		this.getUserActivity(this.type);
	}
	
	getUserActivity(period: string) {
		this.userActivityService.getUserActivityData(period)
			.pipe(takeWhile(() => this.alive))
			.subscribe(userActivityData => {
				this.userActivity = userActivityData;
			});
	}
	
	ngOnDestroy() {
		this.alive = false;
	}
}
