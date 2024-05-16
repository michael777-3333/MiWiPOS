/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  ParseUUIDPipe,
  Delete,
  Put,
  Patch,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {} //importo la clase Userservoice y le digo que sera de tipo user service

  @Post() //colocandole es @Post es como decir haga una peticion Post/users'
  createUser(@Body() newUser: CreateUserDto) {
    // newUser: CreateUserDto = objeto que recibe los datos del body

    return this.usersService.createUser(newUser);
  }

  @Get()
  getUsers(): Promise<User[]> {
    return this.usersService.getUsers(); //listando los usarios
  }

  @Get(':id') // /users/fdfd
  getUser(@Param('id', ParseUUIDPipe) id: number) {
    return this.usersService.getUser(id); //listando los usarios
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseUUIDPipe) id: number) {
    return this.usersService.deleteUser(id);
  }

  @Patch(':id')
  updateUser(
    @Param('id', ParseUUIDPipe) id: number,
    @Body() user: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, user);
  }
}
