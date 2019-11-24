import {Component, OnDestroy} from '@angular/core';
import {NbThemeService} from '@nebular/theme';

@Component({
	selector: 'huecrm-d3-advanced-pie',
	template: `
        <huecrm-charts-advanced-pie-chart
                [scheme]="colorScheme"
                [results]="single">
        </huecrm-charts-advanced-pie-chart>
	`,
})
export class D3AdvancedPieComponent implements OnDestroy {
	single = [
		{
			name: 'Germany',
			value: 8940000,
		},
		{
			name: 'USA',
			value: 5000000,
		},
		{
			name: 'France',
			value: 7200000,
		},
	];
	colorScheme: any;
	themeSubscription: any;
	
	constructor(private theme: NbThemeService) {
		this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
			const colors: any = config.variables;
			this.colorScheme = {
				domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
			};
		});
	}
	
	ngOnDestroy(): void {
		this.themeSubscription.unsubscribe();
	}
}
