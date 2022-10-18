import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: MongoRepository<User>   
  ) {}

  async Create(userDto: UserDto):Promise<User> {
    const user = new User();
    user.fullname = userDto.fullname;
    user.email = userDto.email;
    user.adress = userDto.adress;

    return this.usersRepository.save(user);
  }

  async FindAll():Promise<User[]> {
    const users =  await this.usersRepository.find();
    return users;
  }

  async FindOne(id: string):Promise<User> {
    const user = await  this.usersRepository.findOneBy(id);
    return user
  }

  async Update(id:string, userDto:UserDto):Promise<User> {
    const row = await this.usersRepository.findOneBy(id);
    row.fullname = userDto.fullname
    row.email = userDto.email
    row.adress = userDto.adress
    const updatedRow = await this.usersRepository.save(row)

    return updatedRow
  }

  async Remove(id: string) {
    await this.usersRepository.delete(id)
    return { deleted: true }
  }
}
