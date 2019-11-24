import {Component, OnInit} from '@angular/core';
import {AnalyticsService} from '@huecrm/core';

@Component({
  selector: 'huecrm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
	
	constructor(private analytics: AnalyticsService) {
	}
	
	ngOnInit(): void {
		this.analytics.trackPageViews();
	}
}
