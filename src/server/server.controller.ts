import { Body, Controller, Get, HttpCode, UsePipes, ValidationPipe } from '@nestjs/common';
import { serverDto } from './dto/server.dto';
import { serverService } from './server.service';

@Controller('server')
export class ServerController {
    constructor(private readonly serverService: serverService) {}

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Get('get')
    async serverData(@Body() dto: serverDto) {
        return this.serverService.serverData(dto)
    }
}
