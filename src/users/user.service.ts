import {Inject, Injectable} from '@nestjs/common';
import {UserInterface} from './interfaces/user.interface';
import {Model} from 'mongoose';
import {UserDto} from './dto/user.dto';

@Injectable()
export class UserService {

    constructor(@Inject('USER_MODEL') private readonly userModel: Model<UserInterface>) {}

    async create(userDto: UserDto): Promise<UserInterface> {
        const createdUser = new this.userModel(userDto);
        return await createdUser.save();
    }

    async findAll(): Promise<UserDto[]> {
        return await this.userModel.find().exec();
    }

    async find(id: string): Promise<UserDto[]> {
        return await this.userModel.findById(id).exec();
    }

    async update(id: string, userDto: UserDto): Promise<UserDto> {
        return await this.userModel.findByIdAndUpdate(id, userDto);
    }

    async delete(id: string, userDto: UserDto): Promise<UserDto> {
        return await this.userModel.findByIdAndRemove(id);
    }
}
