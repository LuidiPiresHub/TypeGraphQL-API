import { User } from '@prisma/client';
import prisma from '../utils/prismaClient';
import { PrismaError, UserWithoutId } from '../interfaces/prisma.interface';

export default class UserService {
  public async getUsers(): Promise<User[]> {
    try {
      const users = await prisma.user.findMany();
      return users;
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      throw new Error('Erro ao buscar usuários');
    }
  }

  public async getUserById(id: string): Promise<User | null> {
    try {
      const user = await prisma.user.findUnique({ where: { id } });
      return user;
    } catch (error) {
      console.error(`Erro ao buscar usuário com id ${id}:`, error);
      throw new Error('Erro ao buscar usuário');
    }
  }

  public async createUser(data: UserWithoutId): Promise<User> {
    try {
      const user = await prisma.user.create({ data });
      return user;
    } catch (error) {
      const err = error as PrismaError;
      if (err.code === 'P2002') {
        console.error('Erro de unicidade ao criar usuário:', err);
        throw new Error('Este E-mail já está em uso');
      }
      console.error('Erro ao criar usuário:', err);
      throw new Error('Erro ao criar usuário');
    }
  }

  public async updateUser(id: string, data: UserWithoutId): Promise<User> {
    try {
      const user = await prisma.user.update({ where: { id }, data });
      return user;
    } catch (error) {
      const err = error as PrismaError;
      if (err.code === 'P2002') {
        console.error('Erro de unicidade ao atualizar usuário:', err);
        throw new Error('Este E-mail já está em uso');
      }
      console.error(`Erro ao atualizar usuário com id ${id}:`, err);
      throw new Error('Erro ao atualizar usuário');
    }
  }

  public async deleteUser(id: string): Promise<User> {
    try {
      const user = await prisma.user.delete({ where: { id } });
      return user;
    } catch (error) {
      console.error(`Erro ao deletar usuário com id ${id}:`, error);
      throw new Error('Erro ao deletar usuário');
    }
  }
}
