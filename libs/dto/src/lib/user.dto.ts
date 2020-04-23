import { userParamExample } from '@huecrm/enums';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({ default: userParamExample.username })
  @IsEmail()
  @IsString()
  @MinLength(4)
  email: string;
  @ApiProperty({ default: userParamExample.password })
  @IsString()
  @MinLength(4)
  password: string;
}

export class RegisterDto extends LoginDto {
  @ApiProperty({ default: userParamExample.username })
  @IsString()
  @MinLength(4)
  @MaxLength(30)
  @Type(() => String)
  username: string;
  @ApiProperty({ default: userParamExample.role })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  role: string;
}

export class UserDto extends RegisterDto {

}

export class DeleteUserDto {
  @ApiProperty({ default: userParamExample.username })
  @IsString()
  @MinLength(4)
  @MaxLength(30)
  @Type(() => String)
  username: string;
  // @ApiProperty({default: userParamExample.token, description: userParams.token})
  // @IsNotEmpty()
  // @IsString()
  // @Type(() => String)
  // token: string;
  
}

export interface JwtPayload {
  username: string;
  email: string;
  role: string;
}

export interface UserResponse {
  username: string;
  email: string;
  role: string;
}

export interface AuthenticationResponse {
  token: string;
}



