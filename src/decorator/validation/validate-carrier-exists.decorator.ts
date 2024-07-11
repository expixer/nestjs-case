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
export class CarrierExistsConstraint implements ValidatorConstraintInterface {
  constructor(private prisma: PrismaService) {}

  async validate(carrierId: number) {
    const carrier = await this.prisma.carrier.findFirst({
      where: { id: carrierId },
    });
    return !!carrier;
  }

  defaultMessage() {
    return 'Carrier with ID $value does not exist';
  }
}

export function ValidateCarrierExists(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: CarrierExistsConstraint,
    });
  };
}
