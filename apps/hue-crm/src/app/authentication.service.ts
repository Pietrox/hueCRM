import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {
	constructor(private http: HttpClient) {
	}
	
	getUser(username, password) {
		return this.http
			.post('/api/auth/login', {
				username,
				password
			})
			.subscribe();
	}
}
