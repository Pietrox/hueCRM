import {Component, OnDestroy} from '@angular/core';
import {CountryOrderData} from '@huecrm/core';
import {NbMediaBreakpoint, NbMediaBreakpointsService, NbThemeService} from '@nebular/theme';
import {takeWhile} from 'rxjs/operators';


@Component({
	selector: 'huecrm-country-orders',
	styleUrls: ['./country-orders.component.scss'],
	template: `
        <nb-card [size]="breakpoint.width >= breakpoints.md ? 'medium' : 'giant'">
            <nb-card-header>Country Orders Statistics</nb-card-header>
            <nb-card-body>
                <huecrm-country-orders-map (select)="selectCountryById($event)"
                                           countryId="USA">
                </huecrm-country-orders-map>
                <huecrm-country-orders-chart [countryName]="countryName"
                                             [data]="countryData"
                                             [labels]="countriesCategories"
                                             maxValue="20">
                </huecrm-country-orders-chart>
            </nb-card-body>
        </nb-card>
	`,
})
export class CountryOrdersComponent implements OnDestroy {
	
	countryName = '';
	countryData: number[] = [];
	countriesCategories: string[];
	breakpoint: NbMediaBreakpoint = {name: '', width: 0};
	breakpoints: any;
	private alive = true;
	
	constructor(private themeService: NbThemeService,
	            private breakpointService: NbMediaBreakpointsService,
	            private countryOrderService: CountryOrderData) {
		this.breakpoints = this.breakpointService.getBreakpointsMap();
		this.themeService.onMediaQueryChange()
			.pipe(takeWhile(() => this.alive))
			.subscribe(([oldValue, newValue]) => {
				this.breakpoint = newValue;
			});
		this.countryOrderService.getCountriesCategories()
			.pipe(takeWhile(() => this.alive))
			.subscribe((countriesCategories) => {
				this.countriesCategories = countriesCategories;
			});
	}
	
	selectCountryById(countryName: string) {
		this.countryName = countryName;
		
		this.countryOrderService.getCountriesCategoriesData(countryName)
			.pipe(takeWhile(() => this.alive))
			.subscribe((countryData) => {
				this.countryData = countryData;
			});
	}
	
	ngOnDestroy() {
		this.alive = false;
	}
}
