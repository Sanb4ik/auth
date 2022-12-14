import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { createUseDto } from './dto/create-user-dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @ApiOperation({summary: 'create user'})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: createUseDto){
        return this.userService.createUser(userDto);
    }

    @ApiOperation({summary: 'take all user'})
    @ApiResponse({status: 200, type: [User]})
    @Get()
    getAll(){
        return this.userService.getAllUsers();
    }
}
