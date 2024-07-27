import "reflect-metadata";
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import UserResolver from './resolvers/userResolver';
import dotenv from 'dotenv';
dotenv.config();

const bootstrap = async () => {
  const schema = await buildSchema({ resolvers: [UserResolver] });
  const server = new ApolloServer({ schema, cors: true });
  const PORT: number = Number(process.env.PORT) || 3001;
  const { url } = await server.listen(PORT);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
};

bootstrap();