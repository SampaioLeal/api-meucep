# MeuCEP API

API desenvolvida para o projeto MeuCEP, que consiste na obtenção e armazenamento de CEPs brasileiros e registro de histórico de pesquisa utilizando a API do [ViaCEP](https://viacep.com.br/).

## Instalação

A princípio deve-se instalar os pacotes utilizando `npm` ou `yarn`:

```
npm install
```

ou

```
yarn install
```

Após a instalação dos pacotes é necessário configurar as variáveis de ambiente para a inicialização do servidor.
As variáveis utilizadas podem ser encontradas no arquivo `.env.example` na raiz do projeto.

`.env.example`:

```
PORT=3001
```

Também será necessário configurar o banco de dados através do arquivo de configuração do TypeORM (ormconfig.[js | ts | json | yml]):

```
{
  "useUnifiedTopology": true,
  "type": "mongodb",
  "url": "mongodb+srv://USER:PASSWORD@HOST/DATABASE",
  "synchronize": false,
  "logging": false,
  "entities": ["src/entity/**/*.ts"],
  "migrations": ["src/migration/**/*.ts"],
  "subscribers": ["src/subscriber/**/*.ts"],
  "cli": {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration",
    "subscribersDir": "src/subscriber"
  }
}

```

## Inicialização

Para inicializar o servidor de desenvolvimento basta rodar o script `dev`:

```
yarn dev
```

ou

```
npm run dev
```

Para rodar o serviço em produção o script a ser utilizado é o `start`, o qual irá gerar um build do projeto em JavaScript utilizando o `tsc` na pasta `/build` e rodar o arquivo inicial com o Node.

_Para gerar apenas o build deve-se usar o script `build`._

## Recursos

- Consulta de CEPs de todo o Brasil
- Armazenamento de CEPs e histórico de pesquisas utilizando MongoDB
- Testes
