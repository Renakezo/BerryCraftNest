import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userEntity } from 'src/user/entity/user.entity';
import { ClienttokenController } from './clienttoken.controller';
import { ClienttokenService } from './clienttoken.service';
import { clientEntity } from './entity/clienttoken.entity';

@Module({
  providers: [ClienttokenService],
  controllers: [ClienttokenController],
  imports: [TypeOrmModule.forFeature([userEntity])]
})
export class ClienttokenModule {}
