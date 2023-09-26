import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'sample_proto',
    protoPath: join(__dirname, './sample/sample.proto'),
  },
};
