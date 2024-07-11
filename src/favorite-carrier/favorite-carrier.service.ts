import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";
import { ActionFavoriteCarrierDto } from "./dto";

@Injectable()
export class FavoriteCarrierService {
  constructor(
    private prisma: PrismaService,
  ) {
  }
  async getFavoriteCarrier(userId: number) {
    return this.prisma.favoriteCarrier.findMany({
      where: {
        userId
      }
    });
  }

  async addFavoriteCarrier(userId: number, dto: ActionFavoriteCarrierDto) {

    return this.prisma.favoriteCarrier.create({
      data: {
        userId,
        carrierId: dto.carrierId
      }
    });
  }

  removeFavoriteCarrier(userId: number, dto: ActionFavoriteCarrierDto) {
    return this.prisma.favoriteCarrier.delete({
      where: {
        userId_carrierId: {
          userId,
          carrierId: dto.carrierId
        }
      }
    });
  }
}
