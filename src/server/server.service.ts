import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userEntity } from 'src/user/entity/user.entity';
import { Repository } from 'typeorm';
import { serverDto } from './dto/server.dto';
import { serverEntity } from './entity/server.entity';

@Injectable()
export class serverService {
    constructor(@InjectRepository(userEntity) private readonly serverRepository: Repository<userEntity>) {}

    async serverData(dto: serverDto) {
        const user = await this.serverRepository.findOne({where: {login: dto.login}})
        if(user.serverID == dto.serverID) 
        return (this.returnUserFields(user))
    }

    returnUserFields(user: userEntity) {
        return {
            id: user.id,
            login: user.login,
            "properties": [{
                name: "textures",
                value: user.skin,
            }]
        }
    }
}
