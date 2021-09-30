import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module'

async function bootstrap() {
const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.RMQ,
  options: {
    urls: ['amqps://vmuskxok:o--6edpKj21EjKwWbRsBwDoiFcnyUErx@snake.rmq2.cloudamqp.com/vmuskxok'],
    queue: 'my_queue',
    queueOptions: {
      durable: false
    },
  },
});
app.listen();
}
bootstrap();