import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { TaskDto } from './dto/task.dto';
import {Task} from './interface/task.interface'
import { TaskService } from './task.service';
@Controller('task')
export class TaskController {
constructor( private readonly taskService:TaskService){}
@Get()
findall(): Promise<Task[]>{
   return this.taskService.findall();
  }
@Post()
@EventPattern('task_created')
create(@Body() data:any): Promise<Task> {
  console.log(data);
    return this.taskService.createtask(data);
  }
}
 