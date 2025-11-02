import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { isValidObjectId, Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

async getUserById(id: string): Promise<User> {
    // Validate the id
   if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid user ID format');
   }

  const user = await this.userModel.findById(id).exec();
  if (!user) {
    throw new NotFoundException('User not found');
  }
  return user;
}


 async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {

  if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid user ID format');
  }

  const updatedUser = await this.userModel.findByIdAndUpdate(
    id,
    updateUserDto,
    { new: true, runValidators: true } // returns updated user + validates schema
  );

  if (!updatedUser) {
    throw new NotFoundException('User not found');
  }

  return updatedUser;
}


async deleteUser(id: string): Promise<User> {

  if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid user ID format');
  }

  console.log("id", id);
  const deletedUser = await this.userModel.findByIdAndDelete(id).exec();

  if (!deletedUser) {
    throw new NotFoundException('User not found');
  }

  return deletedUser;
  
}





}
