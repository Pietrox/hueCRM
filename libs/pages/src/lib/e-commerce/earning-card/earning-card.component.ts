import {Component} from '@angular/core';

@Component({
	selector: 'huecrm-earning-card',
	styleUrls: ['./earning-card.component.scss'],
	templateUrl: './earning-card.component.html',
})
export class EarningCardComponent {
	
	flipped = false;
	
	toggleView() {
		this.flipped = !this.flipped;
	}
}
