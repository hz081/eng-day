import { Module } from '@nestjs/common';
import { GrpcModule } from './handler/gRPC/grpc.module';

@Module({
  imports: [GrpcModule],
})
export class AppModule {}
