import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { MetadataDTO } from 'src/common/dto/metadata.dto';
import { PaginationQueryDTO } from 'src/common/dto/pagination-query.dto';
import { PrismaService } from '../../../prisma/prisma.service';
import {
  AdminAccountsDto,
  AdminsAccountsResponseDto,
} from './dto/admin-account.dto';
import {
  CreateAdminAccountRequestDto,
  CreateAdminAccountResponseDto,
} from './dto/create-admin-account.dto';
import {
  UpdateAdminAccountRequestDto,
  UpdateAdminAccountResponseDto,
} from './dto/update-admin-account';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountsService {
  private readonly logger = new Logger(AccountsService.name);
  constructor(private readonly prisma: PrismaService) {}

  //* Create Admin Account.

  async createAdminAccount(
    request: CreateAdminAccountRequestDto
  ): Promise<CreateAdminAccountResponseDto> {
    const { name, email, phone } = request;

    const existsByEmail = this.existsAdminByEmail(email);

    if (await existsByEmail) {
      throw new UnprocessableEntityException(
        'Account with this email already registered.'
      );
    }

    //TODO: Generate a random password for the admin account.
    //TODO: Send email notification to the admin account.

    const account = await this.prisma.adminAccount.create({
      data: {
        name,
        email,
        phone,
      },
    });

    if (!account) {
      throw new InternalServerErrorException('Failed to create admin account.');
    }

    this.logger.log(`Admin account ${email} created successfully.`);

    return plainToInstance(
      CreateAdminAccountResponseDto,
      {
        id: account.id,
        createdAt: account.createdAt,
      },
      { excludeExtraneousValues: true }
    );
  }

  async updateAdminAccount(
    id: string,
    request: UpdateAdminAccountRequestDto
  ): Promise<UpdateAdminAccountResponseDto> {
    const { name, email, phone, deletedAt } = request;

    await this.findAdminAccountById(id);

    const account = await this.prisma.adminAccount.update({
      where: { id },
      data: {
        name,
        email,
        phone,
        deletedAt: deletedAt ? new Date(deletedAt) : null,
      },
    });

    if (!account) {
      throw new InternalServerErrorException('Failed to update admin account.');
    }

    return plainToInstance(
      UpdateAdminAccountResponseDto,
      {
        id: account.id,
        name: account.name,
        email: account.email,
        phone: account.phone,
        deletedAt: account.deletedAt,
        updatedAt: account.updatedAt,
      },
      {
        excludeExtraneousValues: true,
      }
    );
  }

  async findAllAdminAccounts(
    request: PaginationQueryDTO
  ): Promise<AdminsAccountsResponseDto> {
    const { page, limit, sortBy, orderBy } = request;
    const skip = (page - 1) * limit;

    const allowedSortFields = [
      'id',
      'name',
      'email',
      'phone',
      'createdAt',
      'updatedAt',
    ];
    const sortByField = sortBy ?? 'name';
    const safeSortBy = allowedSortFields.includes(sortByField)
      ? sortByField
      : 'name';

    const [accountsData, count] = await Promise.all([
      this.prisma.adminAccount.findMany({
        skip,
        take: limit,
        orderBy: { [safeSortBy]: orderBy },
      }),
      this.prisma.adminAccount.count(),
    ]);

    const accounts = plainToInstance(AdminAccountsDto, accountsData, {
      excludeExtraneousValues: true,
    });

    const totalPages = Math.ceil(count / limit) || 1;

    const metadata = {
      count,
      page,
      limit,
      pages: totalPages,
      firstPage: 1,
      lastPage: totalPages,
      previousPage: page > 1 ? page - 1 : null,
      nextPage: page < totalPages ? page + 1 : null,
    };

    const metadataDto = plainToInstance(MetadataDTO, metadata, {
      excludeExtraneousValues: true,
    });

    return {
      accounts,
      metadata: metadataDto,
    };
  }

  //* Find Admin Account By Id.

  async findAdminAccountById(id: string): Promise<Account> {
    const account = await this.prisma.adminAccount.findUnique({
      where: { id },
    });

    if (!account) {
      throw new NotFoundException(`Admin account with id "${id}" not found`);
    }

    return plainToInstance(Account, account, {
      excludeExtraneousValues: true,
    });
  }

  //* Find Admin Account By Email.

  async findAdminAccountByEmail(email: string): Promise<Account | null> {
    return await this.prisma.adminAccount.findUnique({
      where: { email },
    });
  }

  //* Check if Admin Account Exists By Email.

  async existsAdminByEmail(email: string): Promise<boolean> {
    const account = await this.findAdminAccountByEmail(email);
    return !!account;
  }

  //* Delete Admin Account By Id.

  async deleteAdminAccount(id: string) {
    await this.findAdminAccountById(id);

    await this.prisma.adminAccount.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });
  }

  //* Permanently remove admin account.

  async removeAdminAccount(id: string) {
    await this.findAdminAccountById(id);

    await this.prisma.adminAccount.delete({
      where: { id },
    });
  }
}
