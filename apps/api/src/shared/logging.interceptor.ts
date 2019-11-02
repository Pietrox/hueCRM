import {CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor} from '@nestjs/common';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		const date = Date();
		const now = Date.now();
		const request = context.switchToHttp().getRequest();
		const method = request.method;
		const url = request.url;
		
		return next
			.handle()
			.pipe(
				tap(() =>
					Logger.log(
						`${method} ${url} ${date}' Execution speed = '${Date.now() - now}ms. Time when last request happened:`,
						context.getClass().name,
					),
				),
			);
	}
}
