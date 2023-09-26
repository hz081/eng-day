import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SampleHandler } from './sample/sample.handler';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'sample_proto',
        transport: Transport.GRPC,
        options: {
          package: 'sample_proto',
          protoPath: '../../modules/sample/sample.proto',
        },
      },
    ]),
  ],
  controllers: [SampleHandler],
})
export class GrpcModule {}
