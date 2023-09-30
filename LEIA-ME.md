# Documentação da API CRUD (ORM)
Este documento abordará tudo que é preciso para a utilização da API CRUD.

# Olá! Sejam bem-vindos! 👋

## 🚀 Sobre mim

Olá, sou Jamerson Nascimento, e sou um programador apaixonado por tecnologia eletrônica. Eu moro em Camaragibe e atualmente sou um estudante fullstack em programação.

## 🛠 Habilidades
Sequelize, Node JS, Express, Javascript, HTML, CSS (aprendendo)

# 1. Visão Geral

- **Nome do Projeto:** Computer Shop API
- **Descrição:** API CRUD utilizando o SEQUELIZE com o banco de dados PostgreSQL
- **Autor:** Jamerson Nascimento
- **Data de Criação:** 30/09/2023
- **Versão:** 1.03

# 2. Introdução

Bem-vindo à documentação da API CRUD (Create, Read, Update, Delete) criada para uma loja de informática. Esta API foi desenvolvida com o objetivo de fornecer um conjunto de endpoints que permitem a gestão eficiente de dados relacionados ao nosso sistema.

A API CRUD é uma parte fundamental do ecossistema da loja de informática. Ela oferece um conjunto de operações de criação, leitura, atualização e exclusão de informações, permitindo aos usuários interagirem com nossos recursos de forma intuitiva e simplificada.

Nossa API foi projetada com foco na simplicidade e facilidade de uso. Ela é uma ferramenta poderosa para desenvolvedores, fornecendo uma maneira rápida e eficaz de gerenciar dados. Além disso, oferece uma estrutura sólida e flexível para integrar nossos recursos em suas próprias aplicações.

# 3. O que preciso para usar a API?

### Requisitos de Hardware:

Para o servidor com as seguintes especificações mínimas:

- Processador: Dual-core, 2.0 GHz ou superior.
- Memória RAM: 4 GB ou superior.
- Espaço em Disco: 20 GB de espaço livre.
- Conexão de Internet: Conexão de banda larga para acessar serviços externos (se aplicável).
- Dispositivos de Entrada: Teclado e mouse (para administração do servidor).

### Requisitos de Software:

- **Sistema Operacional:**
  - Linux (Ubuntu 18.04 LTS ou posterior) ou
  - Windows Server (versão 2016 ou posterior).

- **Servidor Web:**
  - Apache HTTP Server (versão 2.4) ou
  - Nginx (versão 1.18) para servir a API.

- **Banco de Dados:**
  - PostgreSQL (versão 12) ou
  - MySQL (versão 8.0).

- **Node.js:**
  - Node.js (versão 14.x) para executar a aplicação da API.

- **Pacotes e Dependências:**
  - Express (framework Node.js).
  - Sequelize (ORM).
  - Outras bibliotecas e módulos específicos da aplicação.


# 4. Instalação e Configuração

A seguir, você encontrará instruções detalhadas sobre como instalar e configurar o projeto em um ambiente local.

1. **Clone o repositório:**

    Primeiramente, clone o repositório do projeto para sua máquina local usando o seguinte comando do Git:

    ```
    git clone https://github.com/jamersonnascimento/computer_shop-crud-node.git
    ```

2. **Acesse a pasta do projeto:**

    Entre na pasta do projeto utilizando o comando:

    ```
    cd nome-do-repositorio
    ```

    Obs.: Lembre-se que você poderá escolher qualquer caminho de diretório, bem como qualquer nome!

3. **Instale as dependências:**

    Utilize o Node.js e o npm (gerenciador de pacotes do Node.js) para instalar as dependências necessárias do projeto. Rode o seguinte comando na pasta raiz do projeto:

    ```
    npm install
    ```

4. **Configure o Banco de Dados:**

    Configure as credenciais do banco de dados no arquivo de configuração correspondente. Isso geralmente envolve editar o arquivo `config/db.config.js`, dependendo da estrutura do seu projeto.

5. **Inicie a aplicação:**

    Com todas as dependências instaladas e o banco de dados configurado, você pode iniciar a aplicação com o seguinte comando:

    ```
    npm start
    ```
    Obs.: Lembre-se de criar o script dentro do arquivo `package.json` usando a sintaxe:
    ```
    "scripts": {
    "start": "node server.js"
    }
    ```


6. **Acesse a aplicação:**

    Após a inicialização bem-sucedida, você pode acessar a aplicação em seu navegador, normalmente em `http://localhost:8080` ou em outra porta especificada na configuração, utilizando o postman (ou qualquer outro software para testes de API).

Pronto! Agora o projeto está instalado e configurado em seu ambiente local.

Lembre-se de consultar a seção de [Configuração](#configuração) para obter detalhes adicionais sobre como ajustar as configurações específicas do projeto, se necessário.


# 5. Uso (implementar depois!)



# 6. Funcionalidades

* **Automatização:** A API CRUD automatiza a inserção de queries no banco de dados.
* **Criação de Registros:** Crie novos registros em nossos bancos de dados de forma fácil e rápida.
* **Recuperação de Dados:** Consulte informações específicas com base em critérios definidos.
* **Atualização de Registros:** Atualize os detalhes dos registros existentes conforme necessário.
* **Exclusão de Dados:** Remova registros que já não são necessários.
* **Validação de Dados:** A API pode incluir validações para garantir que os dados inseridos atendam aos critérios estabelecidos. Isso ajuda a manter a integridade dos dados.
* **Segurança:** Você pode implementar autenticação e autorização em sua API para garantir que apenas usuários autorizados possam acessar ou modificar os dados. Isso protege contra acessos não autorizados.
* **Facilidade de Integração:** Uma API CRUD bem projetada pode ser facilmente integrada a outras aplicações, permitindo que os dados sejam compartilhados entre sistemas diferentes.
* **Escalabilidade:** À medida que sua aplicação cresce, a API CRUD pode ser escalada para lidar com um grande volume de dados e solicitações de usuários.
* **Eficiência:** Simplifica operações de gerenciamento de dados, economizando tempo e recursos. Os usuários podem interagir com o sistema de forma mais eficaz e produtiva.
* **Histórico de Dados:** Você pode implementar recursos de registro ou auditoria que registram as alterações feitas nos registros, rastreando quem fez as alterações e quando.


# 7. Estrutura de Diretórios

```
computer_shop/ [pasta raíz]
│
├── app/
│       ├── controllers/
│       │ ├── address.controller.js
│       │ ├── buy_sell.controller.js
│       │ ├── client.controller.js
│       │ ├── employer.controller.js
│       │ └── person.controller.js
│       │
│       ├── models/
│       │ ├── index.js
│       │ ├── address.model.js
│       │ ├── buy_sell.model.js
│       │ ├── client.model.js
│       │ ├── employer.model.js
│       │ └── person.model.js
│       │
│       ├── routes/
│       │ ├── address.routes.js
│       │ ├── buy_sell.routes.js
│       │ ├── client.routes.js
│       │ ├── employer.routes.js
│       │ └── person.routes.js
│       │
│       ├── config/
│       │ └── db.config.js
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── server.js
└── 
```

Neste exemplo:


- **`computer_shop/`**: A pasta raiz do projeto.

- **`app/`**:  Contém as pastas com códigos-fontes da aplicação.

  - **`controllers/`**: Esta pasta contém controladores para cada entidade principal da aplicação. Cada arquivo, como `address.controller.js` ou `client.controller.js`, lida com a lógica de negócios relacionada a essas entidades.

  - **`models/`**: Esta pasta é usada para definir os modelos de dados que representam as entidades do aplicativo. O arquivo `index.js` geralmente configura e associa os modelos ao banco de dados, enquanto os arquivos individuais, como `address.model.js` e `client.model.js`, definem os atributos e relacionamentos das entidades.

  - **`routes/`**: Aqui estão definidas as rotas da aplicação. Cada arquivo, como `address.routes.js` ou `client.routes.js`, especifica as rotas relacionadas a uma entidade específica e os controladores que devem ser chamados quando essas rotas são acessadas.

  - **`config/`**: Geralmente contém configurações específicas da aplicação, como configurações de banco de dados. O arquivo `db.config.js` provavelmente contém informações de conexão com o banco de dados.

- **`.gitignore`**: Este arquivo especifica os arquivos e diretórios que devem ser ignorados pelo sistema de controle de versão Git. Isso geralmente inclui arquivos temporários ou sensíveis que não devem ser rastreados.

- **`package.json`**: É o arquivo de manifesto do Node.js que lista as dependências do projeto e outras informações, como scripts de execução.

- **`package-lock.json`**: Este arquivo é gerado automaticamente e contém informações detalhadas sobre as versões das dependências do projeto, garantindo uma instalação consistente em diferentes ambientes.

- **`README.md`**: Geralmente, é um arquivo de documentação que fornece informações sobre o projeto, como instruções de instalação, configuração e uso.

- **`server.js`**: É o ponto de entrada da aplicação. Geralmente, ele configura o servidor web e inicia a aplicação.

Esta estrutura de diretórios segue uma organização típica de projetos Node.js com Express.js, onde o código-fonte é dividido em controladores, modelos e rotas para melhor modularidade e manutenção. Além disso, os arquivos de configuração e o arquivo de manifesto são usados para configurar a aplicação e gerenciar dependências.


# 8. Tecnologias Utilizadas

1. **Node.js**: É a plataforma de tempo de execução JavaScript que permite a construção do lado do servidor de aplicações web. É amplamente utilizado para aplicativos web e API RESTful devido à sua eficiência e escalabilidade.

2. **Express.js**: É um framework web para Node.js que simplifica o desenvolvimento de aplicativos web e APIs. Ele oferece recursos para criar rotas, lidar com solicitações HTTP e gerenciar middleware.

3. **JavaScript**: A linguagem de programação principal do lado do servidor e do lado do cliente em projetos web modernos.

4. **Sequelize**: Uma biblioteca Node.js que é um ORM (Object-Relational Mapping) para bancos de dados relacionais. Facilita a interação com bancos de dados SQL, como MySQL, PostgreSQL ou SQLite, mapeando objetos JavaScript para tabelas de banco de dados.

5. **Git**: Um sistema de controle de versão amplamente utilizado para rastrear as alterações no código-fonte e colaborar em projetos de software.

6. **GitHub**: Uma plataforma de hospedagem de código-fonte que permite o armazenamento, colaboração e gerenciamento de projetos baseados em Git.

Essas são as principais tecnologias e ferramentas utilizadas no projeto com base na estrutura de diretórios fornecida. É importante notar que a escolha de tecnologias pode variar dependendo dos requisitos específicos do projeto e das preferências da equipe de desenvolvimento. O Node.js e o Express.js são uma escolha comum para o desenvolvimento de aplicativos web devido à sua eficiência e popularidade na comunidade de desenvolvedores.

# 9. Contribuição

O seu interesse em contribuir para o projeto é muito bem-vindo. Siga as diretrizes abaixo para abrir problemas (issues) ou enviar solicitações de pull (pull requests):

#### Abrindo Problemas (Issues)

1. **Verifique Problemas Existentes**: Antes de abrir um novo problema, verifique se o problema já não foi relatado. Se encontrar um problema semelhante, você pode adicionar um comentário para fornecer informações adicionais.

2. **Descreva Detalhadamente**: Ao abrir um problema, forneça uma descrição clara e detalhada do problema encontrado. Inclua etapas reproduzíveis, mensagens de erro e informações sobre o ambiente em que o problema ocorre (sistema operacional, versão do Node.js, etc.).

3. **Etiquetas (Labels)**: Use etiquetas apropriadas para categorizar o problema. Por exemplo, você pode adicionar etiquetas como "bug" para problemas técnicos, "melhoria" para sugestões de melhorias ou "documentação" para problemas relacionados à documentação.

#### Enviando Solicitações de Pull (Pull Requests)

Se você deseja contribuir com código para o projeto, siga estas etapas ao enviar solicitações de pull (pull requests):

1. **Fork do Repositório**: Faça um fork do repositório para sua própria conta no GitHub.

2. **Clone o Repositório Forked**: Clone o seu fork do repositório para o seu ambiente de desenvolvimento local.

   ```bash
   git clone https://github.com/seu-usuario/seu-fork.git
   ```

3. **Crie uma Branch**: Crie uma branch para a sua contribuição e dê a ela um nome descritivo.

   ```bash
   git checkout -b nome-da-sua-branch
   ```

4. **Faça as Modificações**: Faça as modificações necessárias no código. Certifique-se de seguir as convenções de código e padrões existentes no projeto.

5. **Teste as Modificações**: Certifique-se de testar as suas modificações localmente para garantir que não haja problemas.

6. **Commit e Push**: Commit suas mudanças e envie para o seu repositório forked.

   ```bash
   git add .
   git commit -m "Descrição curta das mudanças"
   git push origin nome-da-sua-branch
   ```

7. **Solicitação de Pull**: No GitHub, vá até o repositório original e clique em "New Pull Request". Selecione a sua branch como a branch de origem e descreva suas mudanças de forma clara e concisa.

8. **Revisão e Discussão**: Outros colaboradores revisarão suas mudanças e podem fornecer feedback ou solicitar alterações. Esteja aberto a discussões construtivas e esteja disposto a fazer as alterações necessárias.

9. **Mesclar (Merge)**: Após a revisão e aprovação, um mantenedor do projeto mesclará suas mudanças na branch principal.

Lembre-se de que é importante seguir as diretrizes de contribuição específicas do projeto, se houver. Este é um processo geral para contribuir com projetos de código aberto, mas cada projeto pode ter suas próprias regras e convenções.

Obrigado por considerar a contribuição para o projeto! Suas contribuições ajudam a melhorar a qualidade do software e beneficiam toda a comunidade de desenvolvedores.

# 10. Licença

 **Licença MIT:**:
   - Permite que qualquer pessoa utilize, modifique e distribua o código, mesmo em projetos comerciais, desde que inclua o aviso de licença no software resultante. Esta é uma licença permissiva.
   Leia o arquivo `LICENCE.MD` para maiores informações.
   
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

# 11. Contato

Se você tiver algum feedback, por favor nos deixe saber por meio de jameswebbinformatica@gmail.com

# 12. Agradecimentos

Gostaríamos de expressar nossa sincera gratidão a todas as pessoas que contribuíram e apoiaram este projeto ao longo do tempo. Suas ideias, feedback, e esforços foram inestimáveis para o sucesso deste empreendimento. Queremos fazer menção especial ao professor Luis Henrique, cuja orientação e assistência foram fundamentais para a criação desta API.

Agradecemos a todos os nossos colaboradores, desenvolvedores da comunidade, e a todos aqueles que testaram e deram feedback. Seu comprometimento e entusiasmo foram essenciais para tornar este projeto o que é hoje.

Obrigado a todos por fazerem parte desta jornada conosco!




