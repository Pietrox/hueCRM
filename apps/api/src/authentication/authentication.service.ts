import { DeleteUserDto, LoginDto, RegisterDto } from "@huecrm/dto";
import { UserModel } from "@huecrm/mongoose-models";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/mongoose";
import * as bcrypt from "bcryptjs";
import { Model } from "mongoose";


@Injectable()
export class AuthenticationService {
	constructor(
		private jwtService: JwtService,
		@InjectModel("User") private userModel: Model<UserModel>
	) {
	}
	
	async create(registerDto: RegisterDto) {
		const user = await this.userModel.findOne(registerDto);
		if (user) {
			throw new HttpException("User already exists", HttpStatus.BAD_REQUEST);
		}
		const createdUser = new this.userModel(registerDto);
		await createdUser.save();
		const payload = {
			username: user.username
		};
		const token = this.jwtService.sign(payload);
		return { user: createdUser, token };
	}
	
	async login(loginDto: LoginDto) {
		try {
			const { email, password } = loginDto;
			const user = await this.userModel.findOne({ email });
			const validate = await bcrypt.compare(password, user.password);
			if (!validate) {
				throw new HttpException("Invalid credentials", HttpStatus.UNAUTHORIZED);
			}
			const payload = { username: user.username };
			const token = this.jwtService.sign(payload);
			return { ...user, token };
		} catch (err) {
			throw new HttpException("Invalid credentials", HttpStatus.UNAUTHORIZED);
		}
	}
	
	async deleteByLogin(deleteUserDto: DeleteUserDto) {
		await this.userModel.findOneAndDelete(deleteUserDto);
	}
	
	findAll(): any {
		return this.userModel.find().exec();
	}
	
	async findByPayload(payload: any) {
		return this.userModel.findOne(payload);
	}
	
	async validateUser(payload: any) {
		return await this.findByPayload(payload);
	}
}
