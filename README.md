# API Node.js com Prisma e MongoDB

Este é um projeto de API RESTful simples construído com Node.js, Express e Prisma ORM, usando um banco de dados MongoDB.

A API permite operações CRUD (Criar, Ler, Atualizar, Deletar) para um modelo de `User`.

## 🚀 Tecnologias Utilizadas

* **Node.js**
* **Express.js**
* **Prisma.io** (com MongoDB)
* **MongoDB**

---

### ✅ Pré-requisitos

Antes de começar, certifique-se de que você tem os seguintes softwares instalados na sua máquina:

* [Node.js](https://nodejs.org/) (versão 18.x ou superior)
* [Git](https://git-scm.com/)
* Uma instância do [MongoDB](https://www.mongodb.com/try/download/community) rodando localmente ou um serviço de banco de dados na nuvem (como o MongoDB Atlas).

---

### ⚙️ Passos de Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/kauandeon-dev/API-Node.js.git](https://github.com/kauandeon-dev/API-Node.js.git)
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd API-Node.js
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Configure as variáveis de ambiente:**
    Crie um arquivo chamado `.env` na raiz do projeto e adicione sua string de conexão do MongoDB.

    **`.env`**
    ```env
    # String de Conexão com o Banco de Dados
    # Substitua com a URL do seu banco de dados MongoDB.
    DATABASE_URL="mongodb+srv://[SEU_USUARIO]:[SUA_SENHA]@[SEU_CLUSTER].mongodb.net/[NOME_DO_BANCO]?retryWrites=true&w=majority"
    ```

5.  **Sincronize o Schema do Prisma com o Banco:**
    Como este projeto usa MongoDB, não usamos `migrate`. O comando correto para sincronizar seu schema (como índices únicos) e gerar o Prisma Client é:
    ```bash
    npx prisma db push
    ```
    *(Este comando irá garantir que o índice `@unique` no campo `email` seja criado no seu banco MongoDB).*

---

### ▶️ Rodando a Aplicação

Para iniciar o servidor, use o script `start` definido no seu `package.json`:

```bash
npm start
