import {Component, OnDestroy} from '@angular/core';
import {TrafficChartData} from '@huecrm/core';
import {NbThemeService} from '@nebular/theme';
import {takeWhile} from 'rxjs/operators';


@Component({
	selector: 'huecrm-traffic',
	styleUrls: ['./traffic.component.scss'],
	template: `
        <nb-card size="tiny">
            <nb-card-header>
                <span>Traffic Consumption</span>

                <nb-select [(selected)]="type">
                    <nb-option *ngFor="let t of types" [value]="t">{{ t }}</nb-option>
                </nb-select>
            </nb-card-header>

            <huecrm-traffic-chart [points]="trafficChartPoints"></huecrm-traffic-chart>
        </nb-card>
	`,
})
export class TrafficComponent implements OnDestroy {
	
	trafficChartPoints: number[];
	type = 'month';
	types = ['week', 'month', 'year'];
	currentTheme: string;
	private alive = true;
	
	constructor(private themeService: NbThemeService,
	            private trafficChartService: TrafficChartData) {
		this.themeService.getJsTheme()
			.pipe(takeWhile(() => this.alive))
			.subscribe(theme => {
				this.currentTheme = theme.name;
			});
		
		this.trafficChartService.getTrafficChartData()
			.pipe(takeWhile(() => this.alive))
			.subscribe((data) => {
				this.trafficChartPoints = data;
			});
	}
	
	ngOnDestroy() {
		this.alive = false;
	}
}
