import {DeleteUserDto, LoginDto, RegisterDto} from '@huecrm/dto';
import {UserModel} from '@huecrm/mongoose-models';
import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';
import {Model} from 'mongoose';

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
			throw new HttpException('Invalid username', HttpStatus.UNAUTHORIZED);
		}
		
		if (await bcrypt.compare(password, user.password)) {
			return this.sanitizeUser(user);
		} else {
			throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
		}
		
	}
	
	async deleteByLogin(deleteUserDto: DeleteUserDto) {
		await this.userModel.findOneAndDelete(deleteUserDto);
	}
	
	findAll(): any {
		return this.userModel.find().exec();
	}
	
	async findByPayload(payload: any) {
		const {username} = payload;
		return this.userModel.findOne({username});
	}
	
	sanitizeUser(user: UserModel) {
		const sanitized = user.toObject();
		delete sanitized['password'];
		return sanitized;
	}
}
