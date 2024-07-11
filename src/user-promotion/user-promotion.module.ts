import { Module } from '@nestjs/common';
import { UserPromotionController } from './user-promotion.controller';
import { UserPromotionService } from './user-promotion.service';

@Module({
  controllers: [UserPromotionController],
  providers: [UserPromotionService]
})
export class UserPromotionModule {}
