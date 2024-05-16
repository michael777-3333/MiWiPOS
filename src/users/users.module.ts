import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], //para saber que entidades va a cargar
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
