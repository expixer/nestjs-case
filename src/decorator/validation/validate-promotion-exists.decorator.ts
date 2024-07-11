import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { PrismaService } from "../../prisma/prisma.service";

@Injectable()
@ValidatorConstraint({ async: true })
export class PromotionExistsConstraint implements ValidatorConstraintInterface {
  constructor(private prisma: PrismaService) {}

  async validate(promotionId: number) {
    const promotion = await this.prisma.promotion.findUnique({
      where: { id: promotionId },
    });
    return !!promotion;
  }

  defaultMessage() {
    return 'Promotion with ID $value does not exist';
  }
}

export function ValidatePromotionExists(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: PromotionExistsConstraint,
    });
  };
}
