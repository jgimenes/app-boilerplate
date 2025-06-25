import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { MetadataDTO } from 'src/common/dto/metadata.dto';
import { PaginationQueryDTO } from 'src/common/dto/pagination-query.dto';
import { PrismaService } from '../../../prisma/prisma.service';
import {
  AdminAccountResponseDto,
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

@Injectable()
export class AccountsService {
  private readonly logger = new Logger(AccountsService.name);
  constructor(private readonly prisma: PrismaService) {}

  //* Create Admin Account.

  async createAdminAccount(
    request: CreateAdminAccountRequestDto
  ): Promise<CreateAdminAccountResponseDto> {
    const { name, email, phone } = request;

    //TODO: Generate a random password for the admin account.
    //TODO: Send email notification to the admin account.

    const accountByEmail = await this.getAdminAccountByEmail(email);

    if (accountByEmail?.deletedAt) {
      const existingAccount = await this.prisma.adminAccount.update({
        where: { id: accountByEmail.id },
        data: {
          name,
          email,
          phone,
          deletedAt: null,
        },
      });
      this.logger.log(`Admin account ${email} restored successfully.`);
      return plainToInstance(
        CreateAdminAccountResponseDto,
        {
          id: existingAccount.id,
          createdAt: existingAccount.createdAt,
        },
        { excludeExtraneousValues: true }
      );
    }

    if (accountByEmail) {
      this.logger.warn(`Admin account with email ${email} already exists.`);
      throw new InternalServerErrorException(
        `Admin account with email ${email} already exists.`
      );
    }

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

    await this.getAdminAccountById(id);

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
  async findAdminAccountById(id: string): Promise<AdminAccountResponseDto> {
    const account = await this.getAdminAccountById(id);

    if (!account) {
      this.logger.warn(`Admin account with ID ${id} not found.`);
      throw new NotFoundException(`Admin account with ID ${id} not found.`);
    }

    return account;
  }

  //* Delete Admin Account By Id.

  async deleteAdminAccount(id: string) {
    const account = await this.getAdminAccountById(id);

    if (!account) {
      this.logger.warn(`Admin account with ID ${id} not found for deletion.`);
      throw new NotFoundException(`Admin account with ID ${id} not found.`);
    }

    this.logger.log(`Soft deleting admin account with ID ${id}.`);
    await this.prisma.adminAccount.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });
  }

  //* Permanently remove admin account.

  async removeAdminAccount(id: string) {
    const account = await this.getAdminAccountById(id);

    if (!account) {
      this.logger.warn(`Admin account with ID ${id} not found for deletion.`);
      throw new NotFoundException(`Admin account with ID ${id} not found.`);
    }

    this.logger.log(`Soft deleting admin account with ID ${id}.`);

    await this.prisma.adminAccount.delete({
      where: { id },
    });
  }

  //* Get Admin Account By Id.

  async getAdminAccountById(
    id: string
  ): Promise<AdminAccountResponseDto | null> {
    const account = await this.prisma.adminAccount.findUnique({
      where: { id },
    });

    return plainToInstance(AdminAccountResponseDto, account, {
      excludeExtraneousValues: true,
    });
  }

  //* get Admin Account By Email.

  async getAdminAccountByEmail(
    email: string
  ): Promise<AdminAccountResponseDto | null> {
    const account = await this.prisma.adminAccount.findUnique({
      where: {
        email,
      },
    });

    return plainToInstance(AdminAccountResponseDto, account, {
      excludeExtraneousValues: true,
    });
  }
}
