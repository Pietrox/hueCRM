import {CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable} from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {
	
	constructor() {
	}
	
	canActivate(context: ExecutionContext) {
		const request = context.switchToHttp().getRequest();
		const user = request.user;
		
		if (user.role === 'Admin') {
			return true;
		}
		throw new HttpException('Insufficient Permission', HttpStatus.UNAUTHORIZED);
	}
	
}
