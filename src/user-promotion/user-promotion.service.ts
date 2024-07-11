import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class UserPromotionService {
  constructor(
    private prisma: PrismaService
  ) {
  }

  async listPromotion(userId: number) {
    return this.prisma.userPromotion.findMany({
      where: {
        userId,
        promotion: {
          isActive: true
        }
      },
      include: {
        promotion: true
      }
    });
  }

  async getPromotion(id: number, userId: number) {

    const userPromotion = await this.prisma.userPromotion.findFirst({
      where: {
        id,
        promotion: {
          isActive: true
        }
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true
          }
        },
        promotion: true
      }
    });

    if (!userPromotion || userPromotion.userId !== userId) {
      throw new BadRequestException("User promotion not found");
    }

    return userPromotion;
  }

  async usePromotion(promotionId: number, userId: number) {
    return this.prisma.userPromotion.delete({
      where: {
        userId_promotionId: {
          userId: userId,
          promotionId: promotionId
        }
      }
    });
  }

}