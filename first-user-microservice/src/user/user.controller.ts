import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UserDto } from './dto/user.dto';
import { user } from './interface/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}
   @Inject('User_Service')private readonly client:ClientProxy
    @Get()
   async findall():Promise<user[]>
   {
   return this.userService.findall();
   }
   @Post('create')
  async create(@Body() userDto: UserDto): Promise<user> {
    return this.userService.create(userDto);
    
  }
  @Post('createtask')
  async createtask(@Body() userDto: UserDto):Promise<any> {
    if(userDto.task)
{
   const user =await this.client.emit("task_created",userDto);
    return user;
}
else
{
  console.log("please enter the task")
}
    
  }
}
