import { Module } from '@nestjs/common';
import { serverService } from './server.service';
import { ServerController } from './server.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { serverEntity } from './entity/server.entity';
import { userEntity } from 'src/user/entity/user.entity';

@Module({
  providers: [serverService],
  controllers: [ServerController],
  imports: [TypeOrmModule.forFeature([userEntity])]
})
export class ServerModule {}
