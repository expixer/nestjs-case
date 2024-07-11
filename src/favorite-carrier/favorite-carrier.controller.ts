import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { JwtGuard } from "../auth/guard";
import { User } from "../auth/decorator";
import { FavoriteCarrierService } from "./favorite-carrier.service";
import { CreateFavoriteCarrierDto } from "./dto";

@UseGuards(JwtGuard)
@Controller("favorite-carrier")
export class FavoriteCarrierController {
  constructor(
    private favoriteCarrierService: FavoriteCarrierService
  ) {
  }

  @Get()
  async get(
    @User("id") userId: number
  ) {
    return this.favoriteCarrierService.getFavoriteCarrier(userId);
  }

  @Post()
  async add(
    @User("id") userId: number,
    @Body() dto: CreateFavoriteCarrierDto
  ) {
    return this.favoriteCarrierService.addFavoriteCarrier(userId, dto);
  }
}
