import { Test, TestingModule } from '@nestjs/testing';
import { AzusController } from './azus.controller';
import { AzusService } from './azus.service';

describe('AzusController', () => {
  let controller: AzusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AzusController],
      providers: [AzusService],
    }).compile();

    controller = module.get<AzusController>(AzusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});