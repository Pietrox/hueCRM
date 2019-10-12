import {LoginDto, UserDto} from '@hue-crm/dto';
import {UserSchema} from '@hue-crm/schemas';
import {HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import {Model} from 'mongoose';

const bcrypt = require('bcrypt');

@Injectable()
export class UserService {
    
    constructor(@Inject('USER_MODEL') private readonly userModel: Model<UserSchema>) {
    }
    
    async create(userDto: UserDto): Promise<UserDto> {
        const createdUser = new this.userModel(userDto);
        return await createdUser.save();
    }
    
    async findAll(): Promise<UserDto[]> {
        return await this.userModel.find().exec();
    }
    
    async find(id: string): Promise<UserDto[] | undefined> {
        return await this.userModel.findById(id).exec();
    }
    
    async findByUserName(loginDto: LoginDto) {
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
    
    
    async update(id: string, userDto: UserDto): Promise<UserDto> {
        return await this.userModel.findByIdAndUpdate(id, userDto);
    }
    
    async delete(id: string): Promise<UserDto> {
        return await this.userModel.findByIdAndRemove(id);
    }
    
    sanitizeUser(user: UserDto) {
        const sanitized = user;
        delete sanitized['password'];
        return sanitized;
    }
}
