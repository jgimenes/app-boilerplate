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
} from '@nestjs/common';
import {
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
import { AccountsService } from './accounts.service';
import {
  AdminAccountResponseDto,
  AdminAccountsResponseDto,
} from './dto/admin-account.dto';
import {
  CreateAdminAccountRequestDto,
  CreateAdminAccountResponseDto,
} from './dto/create-admin-account.dto';
import { UpdateAdminAccountRequestDto } from './dto/update-admin-account';

@Controller('admin/accounts')
@ApiTags('Admin Accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  //* Create admin account

  @Post()
  @ApiOperation({
    summary: 'Create a new admin account',
    description: 'This endpoint allows the creation of a new admin account.',
    operationId: 'createAdminAccount',
  })
  @ApiBody({ type: CreateAdminAccountRequestDto, required: true })
  @ApiCreatedResponse({
    description: 'Account created successfully.',
    type: CreateAdminAccountResponseDto,
  })
  @ApiUnprocessableEntityResponse({
    description: 'Invalid input data.',
    type: HttpExceptionDto,
  })
  createAdminAccount(@Body() request: CreateAdminAccountRequestDto) {
    return this.accountsService.createAdminAccount(request);
  }

  @Get()
  @ApiOperation({
    summary: 'List all admin accounts',
    description: 'Returns a paginated list of all admin accounts.',
    operationId: 'findAllAdminAccounts',
  })
  @ApiOkResponse({
    description: 'Admin accounts retrieved successfully.',
    type: AdminAccountsResponseDto,
  })
  findAllAdminAccounts(
    @Query() request: PaginationQueryDTO
  ): Promise<AdminAccountsResponseDto> {
    return this.accountsService.findAllAdminAccounts(request);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get an admin account by ID',
    description: 'This endpoint retrieves an admin account by its ID.',
    operationId: 'findAdminAccountById',
  })
  @ApiOkResponse({
    description: 'Admin account retrieved successfully.',
    type: AdminAccountResponseDto,
  })
  @ApiNotFoundResponse({
    description: 'Admin account not found.',
    type: HttpExceptionDto,
  })
  findAdminAccountById(@Param('id') id: string) {
    return this.accountsService.findAdminAccountById(id);
  }

  @ApiOperation({
    summary: 'Update an admin account by ID',
    description:
      'This endpoint updates an existing admin account using its ID. Only the fields provided in the request body will be updated.',
    operationId: 'updateAdminAccount',
  })
  @ApiOkResponse({
    description: 'Admin account updated successfully.',
    type: UpdateAdminAccountRequestDto,
  })
  @ApiNotFoundResponse({
    description: 'Admin account not found.',
    type: HttpExceptionDto,
  })
  @Patch(':id')
  updateAdminAccount(
    @Param('id') id: string,
    @Body() request: UpdateAdminAccountRequestDto
  ) {
    return this.accountsService.updateAdminAccount(id, request);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Soft delete an admin account by ID',
    description:
      'This endpoint marks an admin account as removed by setting the deletedAt field. The account is not permanently deleted and can be restored later if needed.',
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
  async deleteAdminAccount(@Param('id') id: string): Promise<void> {
    await this.accountsService.deleteAdminAccount(id);
  }

  @Delete(':id/remove')
  @ApiOperation({
    summary: 'Permanently remove an admin account by ID',
    description:
      'This endpoint permanently deletes an admin account from the system using its ID. This action cannot be undone.',
    operationId: 'removeAdminAccount',
  })
  @HttpCode(204)
  @ApiNoContentResponse({
    description: 'Admin account permanently removed successfully.',
  })
  @ApiNotFoundResponse({
    description: 'Admin account not found.',
    type: HttpExceptionDto,
  })
  async removeAdminAccount(@Param('id') id: string): Promise<void> {
    await this.accountsService.removeAdminAccount(id);
  }
}
