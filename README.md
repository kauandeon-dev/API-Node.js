### ✅ Pré-requisitos

Antes de começar, certifique-se de que você tem os seguintes softwares instalados na sua máquina:

* [Node.js](https://nodejs.org/) (versão LTS recomendada)
* [Git](https://git-scm.com/)
* Uma instância do [MongoDB](https://www.mongodb.com/try/download/community) rodando localmente ou um serviço de banco de dados na nuvem (como o MongoDB Atlas).

### ⚙️ Passos de Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO_AQUI]
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd API-Node.js
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```
    *Este comando irá ler o arquivo `package.json` e baixar todas as bibliotecas necessárias para a pasta `node_modules` (que é ignorada pelo Git).*

4.  **Configure as variáveis de ambiente:**
    Crie um arquivo chamado `.env` na raiz do projeto. Você pode copiar o arquivo de exemplo `.env.example` (se existir) ou usar o modelo abaixo.
    ```
    # String de Conexão com o Banco de Dados
    # Substitua com a URL do seu banco de dados MongoDB.
    DATABASE_URL="mongodb+srv://[SEU_USUARIO]:[SUA_SENHA]@[SEU_CLUSTER].mongodb.net/[NOME_DO_BANCO]?retryWrites=true&w=majority"

    # Porta em que a aplicação vai rodar
    PORT=3000
    ```
    *Lembre-se de preencher com suas credenciais corretas do banco de dados.*

5.  **Aplique as migrações do Prisma:**
    Este comando sincroniza o seu banco de dados com o schema definido no Prisma.
    ```bash
    npx prisma migrate dev
    ```

6.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

Pronto! A API deve estar rodando em `http://localhost:3000` (ou na porta que você definiu no arquivo `.env`).
