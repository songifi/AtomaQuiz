import { Test, TestingModule } from '@nestjs/testing';
import { AtomaController } from './atoma.controller';

describe('AtomaController', () => {
  let controller: AtomaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtomaController],
    }).compile();

    controller = module.get<AtomaController>(AtomaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
