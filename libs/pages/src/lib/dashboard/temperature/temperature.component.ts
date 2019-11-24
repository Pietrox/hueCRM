import {Component, OnDestroy} from '@angular/core';
import {Temperature, TemperatureHumidityData} from '@huecrm/core';
import {NbThemeService} from '@nebular/theme';
import {forkJoin} from 'rxjs';
import {takeWhile} from 'rxjs/operators';


@Component({
	selector: 'huecrm-temperature',
	styleUrls: ['./temperature.component.scss'],
	templateUrl: './temperature.component.html',
})
export class TemperatureComponent implements OnDestroy {
	
	temperatureData: Temperature;
	temperature: number;
	temperatureOff = false;
	temperatureMode = 'cool';
	humidityData: Temperature;
	humidity: number;
	humidityOff = false;
	humidityMode = 'heat';
	theme: any;
	themeSubscription: any;
	private alive = true;
	
	constructor(private themeService: NbThemeService,
	            private temperatureHumidityService: TemperatureHumidityData) {
		this.themeService.getJsTheme()
			.pipe(takeWhile(() => this.alive))
			.subscribe(config => {
				this.theme = config.variables.temperature;
			});
		
		forkJoin(
			this.temperatureHumidityService.getTemperatureData(),
			this.temperatureHumidityService.getHumidityData(),
		)
			.subscribe(([temperatureData, humidityData]: [Temperature, Temperature]) => {
				this.temperatureData = temperatureData;
				this.temperature = this.temperatureData.value;
				
				this.humidityData = humidityData;
				this.humidity = this.humidityData.value;
			});
	}
	
	ngOnDestroy() {
		this.alive = false;
	}
}
