import prisma from '../utils/prismaClient';

const resetDatabase = async (): Promise<void> => {
  try {
    await prisma.user.deleteMany();
    console.log('Banco de dados limpo com sucesso');
  } catch (error) {
    console.error('Erro ao limpar o banco de dados:', error);
  } finally {
    await prisma.$disconnect;
  }
};

resetDatabase();
