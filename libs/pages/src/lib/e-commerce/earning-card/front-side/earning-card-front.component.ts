import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {EarningData, LiveUpdateChart} from '@huecrm/core';
import {NbThemeService} from '@nebular/theme';
import {interval, Subscription} from 'rxjs';
import {switchMap, takeWhile} from 'rxjs/operators';


@Component({
	selector: 'huecrm-earning-card-front',
	styleUrls: ['./earning-card-front.component.scss'],
	templateUrl: './earning-card-front.component.html',
})
export class EarningCardFrontComponent implements OnDestroy, OnInit {
	@Input() selectedCurrency: string = 'Bitcoin';
	intervalSubscription: Subscription;
	currencies: string[] = ['Bitcoin', 'Tether', 'Ethereum'];
	currentTheme: string;
	earningLiveUpdateCardData: LiveUpdateChart;
	liveUpdateChartData: { value: [string, number] }[];
	private alive = true;
	
	constructor(private themeService: NbThemeService,
	            private earningService: EarningData) {
		this.themeService.getJsTheme()
			.pipe(takeWhile(() => this.alive))
			.subscribe(theme => {
				this.currentTheme = theme.name;
			});
	}
	
	ngOnInit() {
		this.getEarningCardData(this.selectedCurrency);
	}
	
	changeCurrency(currency) {
		if (this.selectedCurrency !== currency) {
			this.selectedCurrency = currency;
			
			this.getEarningCardData(this.selectedCurrency);
		}
	}
	
	startReceivingLiveData(currency) {
		if (this.intervalSubscription) {
			this.intervalSubscription.unsubscribe();
		}
		
		this.intervalSubscription = interval(200)
			.pipe(
				takeWhile(() => this.alive),
				switchMap(() => this.earningService.getEarningLiveUpdateCardData(currency)),
			)
			.subscribe((liveUpdateChartData: any[]) => {
				this.liveUpdateChartData = [...liveUpdateChartData];
			});
	}
	
	ngOnDestroy() {
		this.alive = false;
	}
	
	private getEarningCardData(currency) {
		this.earningService.getEarningCardData(currency)
			.pipe(takeWhile(() => this.alive))
			.subscribe((earningLiveUpdateCardData: LiveUpdateChart) => {
				this.earningLiveUpdateCardData = earningLiveUpdateCardData;
				this.liveUpdateChartData = earningLiveUpdateCardData.liveChart;
				
				this.startReceivingLiveData(currency);
			});
	}
}
