import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userEntity } from 'src/user/entity/user.entity';
import { Repository } from 'typeorm';
import { clientDto } from './dto/clienttoken.dto';

@Injectable()
export class ClienttokenService {
    constructor(@InjectRepository(userEntity) private readonly clientRepository: Repository<userEntity>) {}

    async accestoken(dto: clientDto) {
        const user = await this.clientRepository.findOne({where: {id: dto.id}})
        if(dto.accesToken != user.accesToken) throw new BadRequestException('Invalid AccesToken')
        user.serverID = dto.serverID
        await this.clientRepository.save(user)
    }
}
