import { IsNotEmpty, IsNumber, IsPositive, Validate } from "class-validator";

export class CreateFavoriteCarrierDto {

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  carrierId: number;

}

