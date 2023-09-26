import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Sample {
  @Field({ nullable: false })
  param1: string;

  @Field({ nullable: true })
  param2?: string;
}
