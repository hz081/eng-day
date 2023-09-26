import { Module } from '@nestjs/common';
import { SampleService } from './infrastructure/sample.service';
import { SampleResolver } from './sample.resolver';

@Module({
  providers: [
    {
      provide: 'ISampleService',
      useClass: SampleService,
    },
    SampleResolver,
  ],
})
export class SampleModule {}
