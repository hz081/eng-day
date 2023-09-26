import { Module } from '@nestjs/common';
import { SampleController } from './sample.controller';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientOptions } from '../grpc-client.options';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SAMPLE_PACKAGE',
        ...grpcClientOptions,
      },
    ]),
  ],
  controllers: [SampleController],
})
export class GrpcModule {}
