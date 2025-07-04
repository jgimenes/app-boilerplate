import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { MetadataDto } from 'src/common/dto/metadata.dto';
import { PaginationQueryDTO } from 'src/common/dto/pagination-query.dto';
import { AccountRoleEnum } from 'src/common/enums/accuount-role.enum';
import { PrismaService } from '../../prisma/prisma.service';
import {
  AccountResponseDto,
  AccountsDto,
  AccountsResponseDto,
} from './dto/account.dto';
import {
  CreateAccountRequestDto,
  CreateAccountResponseDto,
} from './dto/create-account.dto';
import {
  UpdateAccountRequestDto,
  UpdateAccountResponseDto,
} from './dto/update-account.dto';

@Injectable()
export class AccountsService {
  private readonly logger = new Logger(AccountsService.name);
  constructor(private readonly prisma: PrismaService) {}

  //* Create Account.

  async createAccount(
    request: CreateAccountRequestDto
  ): Promise<CreateAccountResponseDto> {
    const { name, email, phone } = request;

    const accountByEmail = await this.getAccountByEmail(email);

    if (accountByEmail?.deletedAt === null) {
      throw new UnprocessableEntityException(
        `Account with email "${email}" already exists.`
      );
    }

    const account = await this.prisma.account.upsert({
      where: { email },
      update: {
        deletedAt: null,
      },
      create: {
        name,
        email,
        phone,
        role: AccountRoleEnum.Sysadmin,
      },
    });

    if (!account) {
      throw new InternalServerErrorException('Failed to create account.');
    }

    const wasRestored = Boolean(accountByEmail);
    const action = wasRestored ? 'restored' : 'created';

    this.logger.log(`Account "${email}" ${action} successfully.`);

    return plainToInstance(
      CreateAccountResponseDto,
      {
        id: account.id,
        createdAt: account.createdAt,
      },
      { excludeExtraneousValues: true }
    );
  }

  async updateAccount(
    id: string,
    request: UpdateAccountRequestDto
  ): Promise<UpdateAccountResponseDto> {
    const { name, email, phone, deletedAt } = request;

    const existsAccount = await this.getAccountById(id);

    if (!existsAccount) {
      this.logger.warn(`Account with ID ${id} not found.`);
      throw new NotFoundException(`Account with ID ${id} not found.`);
    }

    const account = await this.prisma.account.update({
      where: { id },
      data: {
        name,
        email,
        phone,

        deletedAt: deletedAt ? new Date(deletedAt) : null,
      },
    });

    if (!account) {
      throw new InternalServerErrorException('Failed to update account.');
    }

    return plainToInstance(
      UpdateAccountResponseDto,
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

  async findAllAccounts(
    request: PaginationQueryDTO
  ): Promise<AccountsResponseDto> {
    const { page, limit, sortBy, orderBy } = request;
    const skip = (page - 1) * limit;

    const allowedSortFields = [
      'id',
      'name',
      'email',
      'phone',
      'role',
      'createdAt',
      'updatedAt',
    ];
    const sortByField = sortBy ?? 'name';
    const safeSortBy = allowedSortFields.includes(sortByField)
      ? sortByField
      : 'name';

    const [accountsData, count] = await Promise.all([
      this.prisma.account.findMany({
        skip,
        take: limit,
        orderBy: { [safeSortBy]: orderBy },
      }),
      this.prisma.account.count(),
    ]);

    const accounts = plainToInstance(AccountsDto, accountsData, {
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
      previousPage: page > 1 ? page - 1 : undefined,
      nextPage: page < totalPages ? page + 1 : undefined,
    };

    const metadataDto = plainToInstance<MetadataDto, object>(
      MetadataDto,
      metadata,
      {
        excludeExtraneousValues: true,
      }
    );

    return {
      accounts,
      metadata: metadataDto,
    };
  }

  //* Find Account By Id.
  async findAccountById(id: string): Promise<AccountResponseDto> {
    const account = await this.getAccountById(id);

    if (!account) {
      this.logger.warn(`Account with ID ${id} not found.`);
      throw new NotFoundException(`Account with ID ${id} not found.`);
    }

    return account;
  }

  //* Delete Account By Id.

  async deleteAccount(id: string) {
    const account = await this.getAccountById(id);

    if (!account) {
      this.logger.warn(`Account with ID ${id} not found for deletion.`);
      throw new NotFoundException(`Account with ID ${id} not found.`);
    }

    this.logger.log(`Soft deleting account with ID ${id}.`);

    await this.prisma.account.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });
  }

  //* Permanently remove account.

  async removeAccount(id: string) {
    const account = await this.getAccountById(id);

    if (!account) {
      this.logger.warn(`Account with ID ${id} not found for deletion.`);
      throw new NotFoundException(`Account with ID ${id} not found.`);
    }

    this.logger.log(`Soft deleting account with ID ${id}.`);

    await this.prisma.account.delete({
      where: { id },
    });
  }

  //* Get Account By Id.

  async getAccountById(id: string): Promise<AccountResponseDto | null> {
    const account = await this.prisma.account.findUnique({
      where: { id },
    });

    return plainToInstance(AccountResponseDto, account, {
      excludeExtraneousValues: true,
    });
  }

  //* get Account By Email.

  async getAccountByEmail(email: string): Promise<AccountResponseDto | null> {
    const account = await this.prisma.account.findUnique({
      where: {
        email,
      },
    });

    return plainToInstance(AccountResponseDto, account, {
      excludeExtraneousValues: true,
    });
  }
}
