import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteCarrierController } from './favorite-carrier.controller';

describe('FavoriteCarrierController', () => {
  let controller: FavoriteCarrierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoriteCarrierController],
    }).compile();

    controller = module.get<FavoriteCarrierController>(FavoriteCarrierController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
