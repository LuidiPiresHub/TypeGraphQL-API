import { Arg, Mutation, Query, Resolver, ID, Int } from 'type-graphql';
import UserService from '../services/userService';
import { userEntitie } from '../entities/userEntities';

const userService = new UserService();

@Resolver(userEntitie)
export default class UserResolver {
  @Query(() => [userEntitie])
  async getUsers() {
    return await userService.getUsers();
  }

  @Query(() => userEntitie, { nullable: true })
  async getUserById(@Arg('id', () => ID) id: string) {
    return await userService.getUserById(id);
  }

  @Mutation(() => userEntitie)
  async createUser(
    @Arg('name', () => String) name: string,
    @Arg('email', () => String) email: string,
    @Arg('age', () => Int) age: number
  ) {
    return await userService.createUser({ name, email, age });
  }

  @Mutation(() => userEntitie)
  async updateUser(
    @Arg('id', () => ID) id: string,
    @Arg('name', () => String) name: string,
    @Arg('email', () => String) email: string,
    @Arg('age', () => Int) age: number
  ) {
    return await userService.updateUser(id, { name, email, age });
  }

  @Mutation(() => userEntitie)
  async deleteUser(@Arg('id', () => ID) id: string) {
    return await userService.deleteUser(id);
  }
}
