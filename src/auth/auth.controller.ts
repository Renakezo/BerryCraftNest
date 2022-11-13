import { Body, Controller, Get, HttpCode, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { userDto } from 'src/user/dto/user.dto';
import { AuthService } from './auth.service';
import { authDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly AuthService: AuthService) {}

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Get('login')
    async login(@Body() dto: userDto) {
        return this.AuthService.login(dto)
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Get('login/launcher')
    async loginlauncher(@Body() dto: userDto) {
        return this.AuthService.loginlauncher(dto)
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Post('register')
    async register(@Body() dto: authDto) {
        return this.AuthService.register(dto)
    }
}
