import { Test, TestingModule } from '@nestjs/testing';
import { UserPromotionService } from './user-promotion.service';

describe('UserPromotionService', () => {
  let service: UserPromotionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserPromotionService],
    }).compile();

    service = module.get<UserPromotionService>(UserPromotionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
