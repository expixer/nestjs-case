import { Module } from '@nestjs/common';
import { FavoriteCarrierController } from './favorite-carrier.controller';
import { FavoriteCarrierService } from './favorite-carrier.service';
import { UserExistsConstraint } from "../decorator/validation/validate-user-exists.decorator";
import { CarrierExistsConstraint } from "../decorator/validation/validate-carrier-exists.decorator";
import { PromotionExistsConstraint } from "../decorator/validation/validate-promotion-exists.decorator";

@Module({
  controllers: [FavoriteCarrierController],
  providers: [
    FavoriteCarrierService,
  ],
})
export class FavoriteCarrierModule {}
