import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { UserPromotionService } from "./user-promotion.service";
import { User } from "../auth/decorator";
import { JwtGuard } from "../auth/guard";

@UseGuards(JwtGuard)
@Controller("user-promotion")
export class UserPromotionController {
  constructor(private userPromotionService: UserPromotionService) {
  }

  @Get()
  listPromotion(
    @User("id") userId: number
  ) {
    return this.userPromotionService.listPromotion(userId);
  }

  @Get(":promotionId")
  getPromotion(
    promotionId: number,
    @User("id") userId: number
  ) {
    return this.userPromotionService.getPromotion(promotionId, userId);
  }

  @Post('use-promotion')
  usePromotion(
    @Body("promotionId") promotionId: number,
    @User("id") userId: number
  ) {
    return this.userPromotionService.usePromotion(promotionId, userId);
  }
}
