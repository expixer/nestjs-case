import { Test, TestingModule } from '@nestjs/testing';
import { UserPromotionController } from './user-promotion.controller';

describe('UserPromotionController', () => {
  let controller: UserPromotionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserPromotionController],
    }).compile();

    controller = module.get<UserPromotionController>(UserPromotionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
