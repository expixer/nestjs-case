import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteCarrierService } from './favorite-carrier.service';

describe('FavoriteCarrierService', () => {
  let service: FavoriteCarrierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoriteCarrierService],
    }).compile();

    service = module.get<FavoriteCarrierService>(FavoriteCarrierService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
