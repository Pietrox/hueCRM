import {Component, OnDestroy} from '@angular/core';
import {Contacts, RecentUsers, UserData} from '@huecrm/core';
import {forkJoin} from 'rxjs';
import {takeWhile} from 'rxjs/operators';


@Component({
	selector: 'huecrm-contacts',
	styleUrls: ['./contacts.component.scss'],
	templateUrl: './contacts.component.html',
})
export class ContactsComponent implements OnDestroy {
	
	contacts: any[];
	recent: any[];
	private alive = true;
	
	constructor(private userService: UserData) {
		forkJoin(
			this.userService.getContacts(),
			this.userService.getRecentUsers(),
		)
			.pipe(takeWhile(() => this.alive))
			.subscribe(([contacts, recent]: [Contacts[], RecentUsers[]]) => {
				this.contacts = contacts;
				this.recent = recent;
			});
	}
	
	ngOnDestroy() {
		this.alive = false;
	}
}
