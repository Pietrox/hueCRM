import {Component, OnDestroy} from '@angular/core';
import {SolarData} from '@huecrm/core';
import {NbThemeService} from '@nebular/theme';
import {takeWhile} from 'rxjs/operators';


interface CardSettings {
	title: string;
	iconClass: string;
	type: string;
}

@Component({
	selector: 'huecrm-dashboard',
	styleUrls: ['./dashboard.component.scss'],
	templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {
	
	solarValue: number;
	lightCard: CardSettings = {
		title: 'Light',
		iconClass: 'nb-lightbulb',
		type: 'primary',
	};
	rollerShadesCard: CardSettings = {
		title: 'Roller Shades',
		iconClass: 'nb-roller-shades',
		type: 'success',
	};
	wirelessAudioCard: CardSettings = {
		title: 'Wireless Audio',
		iconClass: 'nb-audio',
		type: 'info',
	};
	coffeeMakerCard: CardSettings = {
		title: 'Coffee Maker',
		iconClass: 'nb-coffee-maker',
		type: 'warning',
	};
	statusCards: string;
	commonStatusCardsSet: CardSettings[] = [
		this.lightCard,
		this.rollerShadesCard,
		this.wirelessAudioCard,
		this.coffeeMakerCard,
	];
	statusCardsByThemes: {
		default: CardSettings[];
		cosmic: CardSettings[];
		corporate: CardSettings[];
		dark: CardSettings[];
	} = {
		default: this.commonStatusCardsSet,
		cosmic: this.commonStatusCardsSet,
		corporate: [
			{
				...this.lightCard,
				type: 'warning',
			},
			{
				...this.rollerShadesCard,
				type: 'primary',
			},
			{
				...this.wirelessAudioCard,
				type: 'danger',
			},
			{
				...this.coffeeMakerCard,
				type: 'info',
			},
		],
		dark: this.commonStatusCardsSet,
	};
	private alive = true;
	
	constructor(private themeService: NbThemeService,
	            private solarService: SolarData) {
		this.themeService.getJsTheme()
			.pipe(takeWhile(() => this.alive))
			.subscribe(theme => {
				this.statusCards = this.statusCardsByThemes[theme.name];
			});
		
		this.solarService.getSolarData()
			.pipe(takeWhile(() => this.alive))
			.subscribe((data) => {
				this.solarValue = data;
			});
	}
	
	ngOnDestroy() {
		this.alive = false;
	}
}
