import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

   async createUser(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }
   async findAllUser(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  async findOneUser(identifier: string): Promise<User | null> {
    // Check if the identifier is a valid Id (assumes MongoDB as the database)
    if (identifier.match(/^[0-9a-fA-F]{24}$/)) {
      // Find user by id
      return this.userModel.findById(identifier).exec();
    } else {
      // Find user by email
      return this.userModel.findOne({ email: identifier }).exec();
    }
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto):Promise<User> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  async removeUser(id: string):Promise<User> {
    return this.userModel.findByIdAndDelete(id);
  }
}
