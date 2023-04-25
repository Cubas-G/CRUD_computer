import { PartialType } from '@nestjs/mapped-types';
import { CreateAzusDto } from './create-azus.dto';

export class UpdateAzusDto extends PartialType(CreateAzusDto) {}