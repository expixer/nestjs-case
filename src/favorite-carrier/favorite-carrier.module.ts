import { Module } from '@nestjs/common';
import { FavoriteCarrierController } from './favorite-carrier.controller';
import { FavoriteCarrierService } from './favorite-carrier.service';

@Module({
  controllers: [FavoriteCarrierController],
  providers: [FavoriteCarrierService]
})
export class FavoriteCarrierModule {}
