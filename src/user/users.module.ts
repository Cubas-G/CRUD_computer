import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { Users } from './entities/user-entity';
import { UsersController } from './users.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}