import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {Message} from '@hue-crm/api-interfaces';

@Component({
	selector: 'hue-crm-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	hello$ = this.http.get<Message>('/api/hello');
	
	constructor(private http: HttpClient) {
	}
}
