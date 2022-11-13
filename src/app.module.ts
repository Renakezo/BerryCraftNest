import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { getSqliteConfig } from './config/sqlite.config';
import { UserModule } from './user/user.module';
import { ClienttokenController } from './clienttoken/clienttoken.controller';
import { ClienttokenModule } from './clienttoken/clienttoken.module';
import { ServerModule } from './server/server.module';
import { SkinsModule } from './skins/skins.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getSqliteConfig,
    }),
    MulterModule.register({
      dest: "./skin"
    }),
    AuthModule,
    UserModule,
    ClienttokenModule,
    ServerModule,
    SkinsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
