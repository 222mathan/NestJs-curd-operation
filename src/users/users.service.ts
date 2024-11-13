import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interface/users.interface';
import { UserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async getAllUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async getUserById(id: string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }

  async updateUserById(id: string, user: UserDto): Promise<User> {
    user.dob = new Date();
    return await this.userModel
      .findOneAndUpdate({ _id: id }, user, { new: true })
      .exec();
  }

  async createUser(user: UserDto): Promise<User> {
    const createdUser = new this.userModel(user);
    return await createdUser.save();
  }
}
