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
export class UserExistsConstraint implements ValidatorConstraintInterface {
  constructor(private prisma: PrismaService) {}

  async validate(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    return !!user;
  }

  defaultMessage() {
    return 'User with ID $value does not exist';
  }
}

export function ValidateUserExists(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: UserExistsConstraint,
    });
  };
}
