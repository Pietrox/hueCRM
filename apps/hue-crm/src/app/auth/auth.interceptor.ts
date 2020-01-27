import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		
		return next.handle(request).pipe(map((response: HttpResponse<any>) => {
			const userResponse = response.body;
			if (userResponse) {
				localStorage.setItem('userData', JSON.stringify(userResponse.user));
				return response;
			}
			
		}));
	}
}
