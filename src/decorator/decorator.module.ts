import { Module } from "@nestjs/common";
import { UserExistsConstraint } from "./validation/validate-user-exists.decorator";
import { CarrierExistsConstraint } from "./validation/validate-carrier-exists.decorator";
import { PromotionExistsConstraint } from "./validation/validate-promotion-exists.decorator";

@Module({
  controllers: [],
  providers: [
    UserExistsConstraint,
    CarrierExistsConstraint,
    PromotionExistsConstraint
  ]
})
export class DecoratorModule {}