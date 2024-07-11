import { IsNotEmpty, IsNumber, IsPositive, Validate } from "class-validator";
import { ValidateCarrierExists } from "../../decorator/validation/validate-carrier-exists.decorator";

export class ActionFavoriteCarrierDto {

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @ValidateCarrierExists()
  carrierId: number;

}

