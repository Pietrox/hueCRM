import {Component} from '@angular/core';
import {NbMenuService} from '@nebular/theme';

@Component({
	selector: 'huecrm-not-found',
	styleUrls: ['./not-found.component.scss'],
	templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
	
	constructor(private menuService: NbMenuService) {
	}
	
	goToHome() {
		this.menuService.navigateHome();
	}
}
