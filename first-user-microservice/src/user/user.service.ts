import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { user } from './interface/user.interface';
import { UserDocument } from './schema/user.schema';
@Injectable()
export class UserService {
constructor( @InjectModel(UserDocument.name) private readonly userModel:Model<UserDocument>)
{}
async findall():Promise<user[]>
{
   return this.userModel.find().exec();
}
async create(user: user): Promise<user> {
   const newUser = new this.userModel(user);
   return await newUser.save();
 }
}
