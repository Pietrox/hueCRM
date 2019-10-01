import {Type} from 'class-transformer';
import {IsEmail, IsNotEmpty, IsString} from 'class-validator';
import {UserParamDescriptionEnum} from '../../shared/enums/user-param-description.enum';
import {UserParamExampleEnum} from '../../shared/enums/user-param-example.enum';
import {ApiModelProperty} from '@nestjs/swagger';

export class UserDto {
    @ApiModelProperty({default: UserParamExampleEnum.userName, description: UserParamDescriptionEnum.userName})
    @IsNotEmpty()
    @IsString()
    @Type(() => String)
    userName: string;
    @ApiModelProperty({default: UserParamExampleEnum.email, description: UserParamDescriptionEnum.email})
    @IsNotEmpty()
    @IsEmail()
    @Type(() => String)
    email: string;
    @ApiModelProperty({default: UserParamExampleEnum.password, description: UserParamDescriptionEnum.password})
    @IsNotEmpty()
    @IsString()
    @Type(() => String)
    password: string;
    @ApiModelProperty({default: UserParamExampleEnum.role, description: UserParamDescriptionEnum.role})
    @IsNotEmpty()
    @IsString()
    @Type(() => String)
    role: string;
}
