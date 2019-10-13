import {LoginDto, RegisterDto, UserDto} from '@hue-crm/dto';
import {User} from '@hue-crm/mongoose-models';
import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {ApiResponse} from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';
import {Model} from 'mongoose';

@Injectable()
@ApiResponse({status: HttpStatus.OK, type: UserDto})
export class UserService {
	constructor(@InjectModel('User') private userModel: Model<User>) {
	}
	
	
	async create(registerDto: RegisterDto) {
		const {username} = registerDto;
		const user = await this.userModel.findOne({username});
		if (user) {
			throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
		}
		
		const createdUser = new this.userModel(registerDto);
		await createdUser.save();
		return this.sanitizeUser(createdUser);
	}
	
	async findByLogin(loginDto: LoginDto) {
		const {username, password} = loginDto;
		const user = await this.userModel.findOne({username});
		if (!user) {
			throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
		}
		
		if (await bcrypt.compare(password, user.password)) {
			return this.sanitizeUser(user);
		} else {
			throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
		}
		
	}
	
	sanitizeUser(user: User) {
		const sanitized = user.toObject();
		delete sanitized['password'];
		return sanitized;
	}
}
