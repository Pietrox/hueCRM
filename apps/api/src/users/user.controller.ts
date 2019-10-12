import {LoginDto, UserDto} from '@hue-crm/dto';
import {apiEndpointTitles, apiParams, apiPaths} from '@hue-crm/enums';
import {Controller, Delete, Get, HttpStatus, Post, Put, Query, UseFilters, UsePipes, ValidationPipe} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiUseTags} from '@nestjs/swagger';
import {MongoExceptionFilter} from '../shared/filters/mongo.filter';
import {UserService} from './user.service';

@Controller(apiPaths.user)
@ApiUseTags(apiEndpointTitles.user)
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    @UseFilters(MongoExceptionFilter)
    @ApiOperation({title: apiEndpointTitles.userPost})
    @ApiResponse({status: HttpStatus.OK, type: UserDto})
    @UsePipes(new ValidationPipe({transform: true}))
        async create(@Query() userDto: UserDto) {
        return this.userService.create(userDto);
    }

    @Get()
    @UseFilters(MongoExceptionFilter)
    @ApiOperation({title: apiEndpointTitles.userGet})
    @ApiResponse({status: HttpStatus.OK, type: UserDto})
    @UsePipes(new ValidationPipe({transform: true}))
    async findAll(): Promise<UserDto[]> {
        return this.userService.findAll();
    }
    
    @Get(apiPaths.id)
    @UseFilters(MongoExceptionFilter)
    @ApiOperation({title: apiEndpointTitles.userGetById})
    @ApiResponse({status: HttpStatus.OK, type: UserDto})
    @UsePipes(new ValidationPipe({transform: true}))
    async find(@Query(apiParams.id) id: string) {
        return this.userService.find(id);
    }
    
    @Get(apiPaths.username)
    @UseFilters(MongoExceptionFilter)
    @ApiOperation({title: apiEndpointTitles.userGetByUserName})
    @ApiResponse({status: HttpStatus.OK, type: LoginDto})
    @UsePipes(new ValidationPipe({transform: true}))
    async findOne(@Query(apiParams.username) username: LoginDto) {
        return this.userService.findByUserName(username);
    }
    
    @Put(apiPaths.id)
    @UseFilters(MongoExceptionFilter)
    @ApiOperation({title: apiEndpointTitles.userPut})
    @ApiResponse({status: HttpStatus.OK, type: UserDto})
    @UsePipes(new ValidationPipe({transform: true}))
    async update(@Query(apiParams.id) id: string, @Query() userDto: UserDto) {
        return this.userService.update(id, userDto);
    }
    
    @Delete(apiPaths.id)
    @UseFilters(MongoExceptionFilter)
    @ApiOperation({title: apiEndpointTitles.userDelete})
    @ApiResponse({status: HttpStatus.OK, type: UserDto})
    @UsePipes(new ValidationPipe({transform: true}))
    async delete(@Query(apiParams.id) id: string, @Query() userDto: UserDto) {
        return this.userService.delete(id);
    }
}
