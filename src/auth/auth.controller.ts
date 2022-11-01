import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { createUseDto } from 'src/users/dto/create-user-dto';
import { AuthService } from './auth.service';

@ApiTags('autorization')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('/login')
    login(@Body() userDto: createUseDto){
        return this.authService.login(userDto);
    }

    @Post('/registration')
    registration(@Body() userDto: createUseDto){
        return this.authService.registration(userDto);
    }

}
