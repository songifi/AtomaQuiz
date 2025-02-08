import { Test, TestingModule } from '@nestjs/testing';
import { AtomaService } from './atoma.service';

describe('AtomaService', () => {
  let service: AtomaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AtomaService],
    }).compile();

    service = module.get<AtomaService>(AtomaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
