import {LoginDto, RegisterDto} from '@hue-crm/dto';
import {UserModel} from '@hue-crm/models';
import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';

const bcrypt = require('bcrypt');

@Injectable()
export class UserService {
	constructor(@InjectModel('User') private userModel: Model<UserModel>) {
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
			return this.sanitizeUser(UserModel);
		} else {
			throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
		}
		
	}
	
	sanitizeUser(user: UserModel) {
		const sanitized = user.toObject();
		delete sanitized['password'];
		return sanitized;
	}
}
