import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/users.dto';
import { User } from './interface/users.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get() // GET /users
  async getAllUsers(): Promise<User[]> {
    return await this.usersService.getAllUsers();
  }

  @Get('interns') // GET /users/interns
  getAllInterns() {
    return [];
  }

  @Get(':id') // GET /users:id
  getUserById(@Param('id') id: string): Promise<User> {
    return this.usersService.getUserById(id);
  }

  @Put(':id')
  async updateUserById(
    @Param('id') id: string,
    @Body() user: UserDto,
  ): Promise<User> {
    return await this.usersService.updateUserById(id, user);
  }

  @Post()
  async createUser(@Body() user: UserDto): Promise<User> {
    return await this.usersService.createUser(user);
  }
}
