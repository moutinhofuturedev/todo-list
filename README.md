# To-do List App

## Descrição

Este projeto é uma aplicação simples de lista de tarefas (To-do list) desenvolvida com **Vite**, **React**, **Typescript**, **Tanstack Query**, **Axios** e **Hygraph**. Ele permite que os usuários criem, listem e excluam tarefas, além de fazer consultas e mutations de forma eficiente.

## Funcionalidades

- Adicionar novas tarefas
- Excluir tarefas
- Consultar a lista de tarefas em tempo real
- Tratamento de erros com **Zod**

## Tecnologias Utilizadas

- [Vite](https://vitejs.dev/) - Build tool para desenvolvimento rápido
- [React](https://reactjs.org/) - Biblioteca para construir interfaces de usuário
- [Typescript](https://www.typescriptlang.org/) - Superset do JavaScript que adiciona tipagem estática
- [Tanstack Query](https://tanstack.com/query/latest) - Ferramenta para gerenciamento de estado de dados assíncronos
- [Axios](https://axios-http.com/) - Cliente HTTP para fazer requisições
- [Hygraph](https://hygraph.com/) - Headless CMS para gerenciamento de conteúdo
- [Zod](https://zod.dev/) - Biblioteca para validação de esquemas

## Requisitos de Instalação

Antes de começar, você precisará ter o **Node.js** e o **npm** ou **yarn** instalados na sua máquina.

- Node.js v16.0.0 ou superior
- npm v8.0.0 ou superior ou yarn v1.22.0 ou superior

## Como Rodar o Projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Acesse o diretório do projeto:

   ```
   cd seu-repositorio
   ```

3. Instale as dependências:
  
   ```
   npm install
   # ou
   yarn install
   ```

4. Defina suas variáveis de ambiente:
   
   >Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

   ```
   VITE_HYGRAPH_URL= <URL do seu Hygraph>
   VITE_HYGRAPH_TOKEN= <Token de autenticação da Hygraph>
   ```

5. Inicie o projeto:
 
   ```
   npm run dev
   # ou
   yarn dev
   ```


