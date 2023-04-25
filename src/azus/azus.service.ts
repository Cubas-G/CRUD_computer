import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAzusDto} from './dto/create-azus.dto';
 import { Azus } from './entities/azus.entity';
import { UpdateAzusDto } from './dto/update-azus.dto';



@Injectable()
export class AzusService {
  constructor(
    @InjectRepository(Azus)
    private readonly azusRpsitory:Repository<Azus>
  ){}

  async create(createAzusDto: CreateAzusDto) {
    const azus = await this.azusRpsitory.create(createAzusDto)
    await this.azusRpsitory.save(azus)
    return azus;
  }

  findAll() {
    return this.azusRpsitory.find();
  }

  findOne(id: string) {
    return this.azusRpsitory.findOneBy({id});
  }

  async update(id: string, updateAzusDto: UpdateAzusDto) {
    const findAzus = await this.findOne(id);
    const updateAzus = await this.azusRpsitory.merge(findAzus, updateAzusDto)
    return this.azusRpsitory.save(updateAzus);
  }

  async remove(id: string) {
    const azus = await this.findOne(id)
    await this.azusRpsitory.remove(azus)
    return "Azus is removed successfully";
  }
}