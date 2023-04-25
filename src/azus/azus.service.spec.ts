import { Test, TestingModule } from '@nestjs/testing';
import { AzusService } from './azus.service';

describe('Azuservice', () => {
  let service: AzusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AzusService],
    }).compile();

    service = module.get<AzusService>(AzusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});