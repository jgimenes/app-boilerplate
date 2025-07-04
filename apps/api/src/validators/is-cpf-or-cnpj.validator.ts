import { isValidCNPJ, isValidCPF } from '@brazilian-utils/brazilian-utils';

import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

export function IsCpfOrCnpj(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isCpfOrCnpj',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: string) {
          const cleaned = value.replace(/\D/g, '');
          return isValidCPF(cleaned) || isValidCNPJ(cleaned);
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be a valid CPF or CNPJ`;
        },
      },
    });
  };
}
