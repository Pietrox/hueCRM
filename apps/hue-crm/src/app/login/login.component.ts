import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from '../authentication.service';

@Component({
	selector: 'huecrm-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	@ViewChild('formUsername', {static: false}) formUsername: ElementRef;
	@ViewChild('formPassword', {static: false}) formPassword: ElementRef;
	
	constructor(private authenticationService: AuthenticationService) {
	}
	
	ngOnInit() {
	}
	
	loginUser(event) {
		const username = this.formUsername.nativeElement.value;
		const password = this.formPassword.nativeElement.value;
		
		this.authenticationService.getUser(username, password);
		console.log(username, password);
		
	}
	
}
