import {Body, Controller, Post, Get, Param, Put, Delete} from "@nestjs/common";
import {UserService} from "./user.service";
import {UserDto} from "./dto/user.dto";
import {UserInterface} from "./interfaces/user.interface";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
        async create (@Body() userDto: UserDto) {
        return this.userService.create(userDto);
    }

    @Get()
        async findAll(): Promise<UserInterface[]> {
        return this.userService.findAll();
    }

    @Get(':id')
        async find(@Param('id') id: string) {
        return this.userService.find(id);
    }

    @Put(':id')
        async update(@Param('id') id: string, @Body() userDto: UserDto) {
        return this.userService.update(id, userDto);
    }

    @Delete(':id')
        async delete(@Param('id') id: string, @Body() userDto: UserDto) {
        return this.userService.delete(id, userDto);
    }
}