import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('/api/v1')
export class UserController {
    constructor(private readonly userService: UserService) {}
  @Post('/register')
  async createUser(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.createUser(createUserDto);
    return { success: true, user };
  }

  @Get('/users')
  async getUsers() {
    const users = await this.userService.getAllUsers();
    return { success: true, users };
  }

  @Get('/users/:id')
  async getUserById(@Param('id') id: string) {
    const user = await this.userService.getUserById(id);
    return { success: true, user };
  }

  @Put('/users/:id')
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const user = await this.userService.updateUser(id, updateUserDto);
    return { success: true, user };
  }

  @Delete('/users/:id')
  async deleteUser(@Param('id') id: string) {
    const user = await this.userService.deleteUser(id);
    return { success: true, user };
  }


}
