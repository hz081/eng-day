import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: 'localhost:5001',
      protoPath: './modules/sample/sample.proto',
      package: 'sample_proto',
    },
  });
  await app.startAllMicroservices();
  console.log('Sample gRPC microservice started in http://localhost:5001');
  await app.listen(4002);
}
bootstrap();
