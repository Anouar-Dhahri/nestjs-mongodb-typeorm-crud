import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  Create(@Body() userDto: UserDto):Promise<User> {
    return this.usersService.Create(userDto);
  }

  @Get()
  FindAll():Promise<User[]> {
    return this.usersService.FindAll()
  }

  @Get('/:id')
  FindOne(@Param('id') id:string):Promise<User> {
    return this.usersService.FindOne(id)
  }

  @Put('/:id')
  Update(@Param('id') id: string, @Body() userDto: UserDto):Promise<User> {
    return this.usersService.Update(id, userDto)
  }

  @Delete('/:id')
  Remove(@Param('id') id:string) {
    return this.usersService.Remove(id)
  }
}
