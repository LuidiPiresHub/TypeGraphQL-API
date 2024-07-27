import { User } from '@prisma/client';

export interface PrismaError {
  code: string;
}

export interface UserWithoutId extends Omit<User, 'id'> {}
