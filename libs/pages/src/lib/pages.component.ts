import {Component} from '@angular/core';

import {MENU_ITEMS} from './pages-menu';

@Component({
	selector: 'huecrm-pages',
	styleUrls: ['pages.component.scss'],
	template: `
        <huecrm-one-column-layout>
            <nb-menu [items]="menu"></nb-menu>
            <router-outlet></router-outlet>
        </huecrm-one-column-layout>
	`,
})
export class PagesComponent {
	
	menu = MENU_ITEMS;
}
