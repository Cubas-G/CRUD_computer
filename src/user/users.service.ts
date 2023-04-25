import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {  Users } from './entities/user-entity';
import { UpdateUsersDto } from './dto/update-users.dto';
import { CreateUsersDto } from './dto/create-user.dto';



@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepoitory:Repository<Users>
  ){}

  
  async create(createUsersDto: CreateUsersDto) {
    const users = await this.usersRepoitory.create(createUsersDto)
    await this.usersRepoitory.save(users)
    return users;
  }

  findAll() {
    return this.usersRepoitory.find();
  }

  findOne(id: string) {
    return this.usersRepoitory.findOneBy({id});
  }
  
  async update(id: string, updateUsersDto: UpdateUsersDto) {
    const findUsers = await this.findOne(id);
    const updateUsers = await this.usersRepoitory.merge(findUsers, updateUsersDto);
    
    return this.usersRepoitory.save(updateUsers);
  }

  async remove(id: string) {
    const findUsers = await this.findOne(id)
    await this.usersRepoitory.remove(findUsers);
    return "supplier removed successfully";
  }
}