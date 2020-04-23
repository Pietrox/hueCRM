import { AuthenticationResponse, DeleteUserDto, JwtPayload, LoginDto, RegisterDto } from '@huecrm/dto';
import { UserModel } from '@huecrm/mongoose-models';
import { HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';
import { Model } from 'mongoose';


@Injectable()
export class AuthenticationService {
  constructor(
	private jwtService: JwtService,
	@InjectModel('User') private userModel: Model<UserModel>
  ) {
  }
  
  async register(registerDto: RegisterDto): Promise<AuthenticationResponse> {
	const checkForUser = await this.userModel.findOne({ email: registerDto.email });
	if (checkForUser) {
	  throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
	}
	try {
	  const user = await this.userModel.create(registerDto);
	  await user.save();
	  const payload: JwtPayload = {
		username: user.username,
		email: user.email,
		role: user.role
	  };
	  const token = this.jwtService.sign(payload);
	  return { ...this.sanitizeUser(user), token };
	} catch (err) {
	  throw new InternalServerErrorException();
	}
  }
  
  async login(loginDto: LoginDto): Promise<AuthenticationResponse> {
	const user = await this.userModel.findOne({ email: loginDto.email });
	const validate = await bcrypt.compare(loginDto.password, user.password);
	if (!validate) {
	  throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
	}
	try {
	  const payload: JwtPayload = {
		username: user.username,
		email: user.email,
		role: user.role
	  };
	  const token = await this.jwtService.sign(payload);
	  return { token: token };
	} catch (err) {
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
	return this.userModel.findOne(payload);
  }
  
  async validateUser(payload: any) {
	return await this.findByPayload(payload);
  }
  
  sanitizeUser(user: UserModel) {
	const sanitized = user.toObject();
	delete sanitized['password'];
	delete sanitized['__v'];
	return sanitized;
  }
}
