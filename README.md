# API GraphQL com TypeScript

## Descrição

Este projeto é uma API desenvolvida com GraphQL usando TypeScript e Prisma. O objetivo foi criar uma API RESTful que usa GraphQL para fornecer consultas e mutações, permitindo uma abordagem flexível para o acesso aos dados. Este é um exemplo de como configurar e trabalhar com GraphQL e TypeScript pela primeira vez.

### O que Aprendi

- **GraphQL**: Como configurar e implementar um servidor GraphQL usando TypeScript.
- **Prisma**: Integração com Prisma ORM para gerenciamento de banco de dados MongoDB.
- **TypeScript**: Uso de TypeScript para tipos estáticos e segurança de tipo em um projeto GraphQL.
- **Configuração de Ambiente**: Configuração do servidor Apollo e Prisma Client para um ambiente de desenvolvimento completo.

## Diagrama do Projeto

Aqui está um diagrama visual do projeto criado com Excalidraw:

![Diagrama do Projeto](https://github.com/user-attachments/assets/a5145554-2837-4428-b690-c602533d599c)

<details>
  <summary>
    <strong>❗️❗️ Instalação e como usar ❗️❗️</strong>
  </summary>

## 1. Clone o repositório:
  ```bash
    git clone git@github.com:LuidiPiresHub/TypeGraphQL-API.git
    cd TypeGraphQL-API
   ```
## 2. Instale as dependências:
  ```bash
    npm install
  ```

## 3. Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:
  ```env
    PORT=3001 // Ou qualquer outra porta que desejar
    DATABASE_URL="sua_url_do_banco_de_dados"
  ```


## 4. Gere o PrismaClient e execute o script de seed:
  ```bash
    npx prisma generate
    npm run seed
  ```

## 5. Execute o servidor
  ```bash
    npm run dev
  ```
</details>

<details>
  <summary>
    <strong>🛠 Query's e Mutation's 🛠</strong>
  </summary>

## 1. Query para buscar todos os usuários:
  ```graphql
  query getUsers {
      getUsers {
        id
        name
        age
        email
      }
    }
   ```

## 2. Query para buscar usuário por ID:
  ```graphql
  query getUserById {
    getUserById(id: "clz3cgznv0000covc8rj03ev7") {
      id
      name
      email
      age
    }
  }
  ```

## 3. Mutation para criar usuário:
  ```graphql
  mutation createUser {
    createUser(name: "João", age: 30, email: "joao@gmail.com") {
      id
      name
      email
      age
    }
  }
  ```

## 4. Mutation para atualizar usuário:
  ```graphql
  mutation updateUser {
    updateUser(
      id: "clz3cgznv0000covc8rj03ev7",
      name: "Maria", 
      email: "maria@gmail.com", 
      age: 35
    ) {
    id
    name
    email
    age
  }
  }
  ```

## 5. Mutation para deletar usuário:
  ```graphql
  mutation deleteUser {
    deleteUser(id: "clz3cgznv0000covc8rj03ev7") {
      id
      name
      email
      age
    }
  }
  ```
</details>

</br>

**Nota:** Este é um projeto para fins de estudo e demonstração. Para ambientes de produção, considere práticas de segurança adicionais e validações mais robustas.

---

> Feito com 💙 por [Luídi Pires](https://github.com/LuidiPiresHub)
