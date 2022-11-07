import { Body, Controller, Get, HttpCode, UsePipes, ValidationPipe } from '@nestjs/common';
import { ClienttokenService } from './clienttoken.service';
import { clientDto } from './dto/clienttoken.dto';

@Controller('clienttoken')
export class ClienttokenController {
    constructor(private readonly ClientService: ClienttokenService) {}

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Get('accestoken')
    async accestoken(@Body() dto: clientDto) {
        return this.ClientService.accestoken(dto)
    }

}
