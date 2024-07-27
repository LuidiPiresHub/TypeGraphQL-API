import prisma from '../utils/prismaClient';
import { PrismaError, UserWithoutId } from '../interfaces/prisma.interface';

const users: UserWithoutId[] = [
  { email: 'john.doe@example.com', age: 25, name: 'John Doe' },
  { email: 'jane.doe@example.com', age: 30, name: 'Jane Doe' },
  { email: 'alice.smith@example.com', age: 28, name: 'Alice Smith' },
  { email: 'bob.jones@example.com', age: 35, name: 'Bob Jones' }
];

const seed = async (): Promise<void> => {
  try {
    await prisma.user.createMany({ data: users });
    console.log('Usuarios criados com sucesso');
  } catch (error) {
    const err = error as PrismaError;
    if (err.code === 'P2002') {
      console.log('Usuários já foram criados');
      return;
    }
    console.error('########################### Erro ao criar usuários: ###########################\n\n', error);
  } finally {
    await prisma.$disconnect();
  }
};

seed();
