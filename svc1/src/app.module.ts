import { Module } from '@nestjs/common';
import { GrpcModule } from './sample/sample.module';

@Module({
  imports: [GrpcModule],
})
export class AppModule {}
