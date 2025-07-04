import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { HttpExceptionDto } from 'src/common/dto/http-exception.dto';
import { PaginationQueryDTO } from 'src/common/dto/pagination-query.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AccountsService } from './accounts.service';
import { AccountResponseDto, AccountsResponseDto } from './dto/account.dto';
import {
  CreateAccountRequestDto,
  CreateAccountResponseDto,
} from './dto/create-account.dto';
import { UpdateAccountRequestDto } from './dto/update-account.dto';

@Controller('accounts')
@ApiTags('Accounts')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('jwt')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  //* Create account

  //Todo: Add Roles and Permissions

  @Post()
  @ApiOperation({
    summary: 'Create a new account',
    description: 'This endpoint allows the creation of a new account.',
    tags: ['Accounts'],
  })
  @ApiBody({ type: CreateAccountRequestDto, required: true })
  @ApiCreatedResponse({
    description: 'Account created successfully.',
    type: CreateAccountResponseDto,
  })
  @ApiUnprocessableEntityResponse({
    description: 'Invalid input data.',
    type: HttpExceptionDto,
  })
  createAccount(@Body() request: CreateAccountRequestDto) {
    return this.accountsService.createAccount(request);
  }

  @Get()
  @ApiOperation({
    summary: 'List all accounts',
    description: 'Returns a paginated list of all accounts.',
  })
  @ApiOkResponse({
    description: 'Accounts retrieved successfully.',
    type: AccountsResponseDto,
  })
  findAAccounts(
    @Query() request: PaginationQueryDTO
  ): Promise<AccountsResponseDto> {
    return this.accountsService.findAllAccounts(request);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get an account by ID',
    description: 'This endpoint retrieves an account by its ID.',
  })
  @ApiOkResponse({
    description: 'Account retrieved successfully.',
    type: AccountResponseDto,
  })
  @ApiNotFoundResponse({
    description: 'Account not found.',
    type: HttpExceptionDto,
  })
  findAccountById(@Param('id') id: string) {
    return this.accountsService.findAccountById(id);
  }

  @ApiOperation({
    summary: 'Update an account by ID',
    description:
      'This endpoint updates an existing account using its ID. Only the fields provided in the request body will be updated.',
  })
  @ApiOkResponse({
    description: 'Account updated successfully.',
    type: UpdateAccountRequestDto,
  })
  @ApiNotFoundResponse({
    description: 'Admin account not found.',
    type: HttpExceptionDto,
  })
  @Patch(':id')
  updateAdminAccount(
    @Param('id') id: string,
    @Body() request: UpdateAccountRequestDto
  ) {
    return this.accountsService.updateAccount(id, request);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Soft delete an account by ID',
    description:
      'This endpoint marks an account as removed by setting the deletedAt field. The account is not permanently deleted and can be restored later if needed.',
    operationId: 'deleteAdminAccount',
  })
  @HttpCode(204)
  @ApiNoContentResponse({
    description: 'Admin account permanently removed successfully.',
  })
  @ApiNotFoundResponse({
    description: 'Admin account not found.',
    type: HttpExceptionDto,
  })
  async deleteAccount(@Param('id') id: string): Promise<void> {
    await this.accountsService.deleteAccount(id);
  }

  @Delete(':id/remove')
  @ApiOperation({
    summary: 'Permanently remove an account by ID',
    description:
      'This endpoint permanently deletes an account from the system using its ID. This action cannot be undone.',
  })
  @HttpCode(204)
  @ApiNoContentResponse({
    description: 'Account permanently removed successfully.',
  })
  @ApiNotFoundResponse({
    description: 'Account not found.',
    type: HttpExceptionDto,
  })
  async removeAccount(@Param('id') id: string): Promise<void> {
    await this.accountsService.removeAccount(id);
  }
}
