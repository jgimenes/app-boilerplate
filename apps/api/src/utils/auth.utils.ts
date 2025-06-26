import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { randomInt } from 'crypto';

@Injectable()
export class authUtils {
  constructor(private readonly jwtService: JwtService) {}

  //* Generates a random OTP (One Time Password) of specified length

  static generateOTP(length: number = 6): string {
    const max = Math.pow(10, length);
    const num = randomInt(0, max);
    return num.toString().padStart(length, '0');
  }

  //* Hashed OTP with bcrypt

  static hashOTP(otp: string, saltRounds = 10): string {
    return bcrypt.hashSync(otp, saltRounds);
  }

  //* Compares an OTP with its hash

  static async compareOTP(otp: string, hash: string): Promise<boolean> {
    return bcrypt.compare(otp, hash);
  }
}
