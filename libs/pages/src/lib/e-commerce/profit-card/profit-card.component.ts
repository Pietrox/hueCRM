import {Component} from '@angular/core';

@Component({
	selector: 'huecrm-profit-card',
	styleUrls: ['./profit-card.component.scss'],
	templateUrl: './profit-card.component.html',
})
export class ProfitCardComponent {
	
	flipped = false;
	
	toggleView() {
		this.flipped = !this.flipped;
	}
}
