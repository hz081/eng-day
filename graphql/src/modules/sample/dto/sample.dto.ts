import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class SampleInput {
  @IsAlpha()
  @Field({ nullable: false })
  param1: string;

  @Field({ nullable: true })
  param2?: string;

  @Field({ nullable: true })
  page?: string;

  @Field({ nullable: true })
  limit?: string;
}
