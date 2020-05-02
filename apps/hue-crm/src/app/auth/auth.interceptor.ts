import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { NbAuthService, NbAuthToken } from '@nebular/auth';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  constructor(private injector: Injector) {
  }
  
  protected get authService(): NbAuthService {
	return this.injector.get(NbAuthService);
  }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
	return this.authService.isAuthenticatedOrRefresh()
	  .pipe(
		switchMap(authenticated => {
		  if (authenticated) {
			return this.authService.getToken().pipe(
			  switchMap((token: NbAuthToken) => {
				const JWT = `Bearer ${token.getValue()}`;
				console.log('weszlo');
				req = req.clone({
				  setHeaders: {
					Authorization: JWT
				  }
				});
				return next.handle(req);
			  })
			);
		  } else {
			return next.handle(req);
		  }
		})
	  );
  }
  
}
