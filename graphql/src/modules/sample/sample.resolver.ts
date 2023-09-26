import { Args, Query, Resolver } from '@nestjs/graphql';
import { Sample } from './types/sample.type';
import { ISampleService } from './services/sample.interface';
import { SampleInput } from './dto/sample.dto';
import { Inject } from '@nestjs/common';

@Resolver(() => Sample)
export class SampleResolver {
  constructor(@Inject('ISampleService') private service: ISampleService) {}

  @Query(() => Sample)
  async getSample(@Args('query') input: SampleInput): Promise<Sample> {
    return this.service.getSample(input.param1, input.param2);
  }
}
