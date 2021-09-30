import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { UserDocument, UserSchema } from './schema/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';
@Module({
    imports:[MongooseModule.forFeature([{name:UserDocument.name,schema:UserSchema}])
,ClientsModule.register([{
    name:'User_Service',
    transport:Transport.RMQ,
    options:{
        urls:['amqps://vmuskxok:o--6edpKj21EjKwWbRsBwDoiFcnyUErx@snake.rmq2.cloudamqp.com/vmuskxok'],
        queue:'my_queue',
        queueOptions:{
            durable:false
        },
    },
}])
],
    controllers:[UserController],
    providers: [UserService]
})
export class UserModule {}
