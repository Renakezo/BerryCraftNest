import { Module } from '@nestjs/common';
import { SkinsController } from './skins.controller';

@Module({
  controllers: [SkinsController]
})
export class SkinsModule {}
