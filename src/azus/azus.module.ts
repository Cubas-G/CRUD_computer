import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Azus } from './entities/azus.entity';
import { AzusController } from './azus.controller';
import { AzusService } from './azus.service';

@Module({
  imports:[TypeOrmModule.forFeature([Azus])],
  controllers: [AzusController],
  providers: [AzusService]
})
export class AzusModule {}