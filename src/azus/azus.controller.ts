import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateAzusDto } from './dto/create-azus.dto';
import { AzusService } from './azus.service';

@Controller('azus')
export class AzusController {
  constructor(private readonly azusService: AzusService) {}

  @Post()
  create(@Body() createAzustDto: CreateAzusDto) {
    return this.azusService.create(createAzustDto);
  }

  @Get()
  findAll() {
    return this.azusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.azusService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAzusDto: CreateAzusDto) {
    return this.azusService.update(id, updateAzusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.azusService.remove(id);
  }
}