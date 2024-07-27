import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class userEntitie {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;
  
  @Field(() => Number)
  age: number;
}