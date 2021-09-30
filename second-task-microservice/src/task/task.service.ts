import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Task} from './interface/task.interface'
import { TaskDocument } from './schema/task.schema';
@Injectable()
export class TaskService {
    constructor( @InjectModel(TaskDocument.name) private readonly userModel:Model<TaskDocument>){}
    createtask(users: Task):Promise<Task> {
        return this.userModel.create(users);
      }
      findall():Promise<Task[]> {
        return this.userModel.find().exec();
      }
}
