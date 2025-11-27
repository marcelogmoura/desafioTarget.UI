# DotNetAI API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![.NET Core](https://img.shields.io/badge/.NET-512BD4?style=flat&logo=dotnet&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=flat&logo=nginx&logoColor=white)
![Docker](https://img.shields.io/badge/docker-2496ED?style=flat&logo=docker&logoColor=white)
![Visual Studio](https://img.shields.io/badge/Visual_Studio-5C2D91?style=flat&logo=visual-studio&logoColor=white)
![Git](https://img.shields.io/badge/GIT-F05032?style=flat&logo=git&logoColor=white)

# 🚀 Desafio - Gestão de Vendas e Estoque

Este projeto é uma solução completa (Fullstack) desenvolvida para resolver desafios de lógica de negócio, cálculo de comissões e gestão de estoque. A arquitetura foi desenhada seguindo as melhores práticas de mercado, focando em **Escalabilidade**, **Manutenibilidade** e **Desacoplamento**.

## ✨ O backend (C#) do projeto se encontra no link:

[https://github.com/marcelogmoura/desafioTarget.API](https://github.com/marcelogmoura/desafioTarget.API)


## 🛠️ Tecnologias Utilizadas

### Back-end (.NET 8)
- **ASP.NET Core Web API**: Exposição dos endpoints RESTful.
- **Entity Framework Core**: ORM para persistência de dados.
- **SQL Server**: Banco de dados relacional.
- **Clean Architecture**: Separação de responsabilidades em camadas (Domain, Application, Infra, API).
- **SOLID**: Aplicação rigorosa dos princípios de design de código.
- **Swagger**: Documentação automática da API.

### Front-end (Angular 17+)
- **Standalone Components**: Arquitetura moderna sem módulos (NgModule).
- **Service Pattern**: Isolamento da comunicação HTTP.
- **Bootstrap 5**: Estilização responsiva e componentes visuais (Cards, Modals, Tables).
- **Nginx**: Servidor web de alta performance para servir a aplicação no Docker.

### Infraestrutura & DevOps
- **Docker Compose**: Orquestração dos containers (Front + API + SQL Server).
- **Dockerfile**: Containerização otimizada (Multi-stage build).

---

## 🏗️ Arquitetura do Projeto

A solução foi estruturada utilizando o padrão **Onion Architecture / Clean Architecture**:

1.  **Domain**: O núcleo do sistema. Contém as Entidades (`Produto`, `Movimentacao`), Interfaces (`IRepository`) e Regras de Negócio Puras (`CalculadoraComissaoService`). Não depende de ninguém.
2.  **Application**: Camada de orquestração. Contém os DTOs (Data Transfer Objects) e Services que traduzem os dados externos para o domínio.
3.  **Infra**: Implementação técnica. Contém o `DbContext`, Mapeamentos do EF Core e Repositórios concretos.
4.  **API**: Ponto de entrada. Controllers enxutos que apenas recebem requisições e devolvem respostas HTTP.

---

## 🚀 Como Rodar o Projeto


### Pré-requisitos
- [Docker Desktop](https://www.docker.com/products/docker-desktop) instalado e rodando.
- [Node.js](https://nodejs.org/) (apenas caso queira rodar o front fora do Docker).
- [.NET 8 SDK](https://dotnet.microsoft.com/download) (opcional, para rodar comandos locais).

### Passo a Passo (Ambiente Docker)

1. **Clone o repositório** e acesse a pasta raiz.

2. **Crie um arquivo `.env`** na raiz (ao lado do `docker-compose.yml`) para definir a senha segura do banco:
   ```env
   SA_PASSWORD=MinhaSenhaForte!2025
   ```
3. Suba todo o ambiente (Front, Back e Banco) com um único comando:

```
docker-compose up -d --build
```

4. Acesse a aplicação:

* Front-end (Angular): http://localhost (Porta 80)

* API (Swagger): http://localhost:8080/swagger


### 🗄️ Configuração do Banco de Dados

Caso seja a primeira execução e as tabelas não tenham sido criadas automaticamente, você pode rodar a migration via linha de comando (na raiz do projeto):

```
dotnet ef database update --project desafioTarget.Infra --startup-project desafioTarget.API
```

OBS: Certifique-se de que o appsettings.json local tenha a mesma senha definida no arquivo .env


### ✅ Funcionalidades Implementadas

1. 💰 Calculadora de Comissões
Entrada: JSON com lista de vendas.

Regras:

Venda < R$ 100,00: Sem comissão.

Venda < R$ 500,00: 1% de comissão.

Venda >= R$ 500,00: 5% de comissão.

Saída: Relatório consolidado por vendedor.

2. 📦 Gestão de Estoque
Carga Inicial: Endpoint para receber grande volume de produtos via JSON e persistir no SQL Server.

Movimentação: Entrada e Saída de mercadorias com validação de saldo (não permite estoque negativo).

Histórico: Registro de todas as movimentações no banco.

3. 📅 Cálculo de Juros
Cálculo financeiro simples aplicando taxa de 2.5% ao dia sobre o valor original baseado nos dias de atraso (Multa).


## 📚 Exemplos de requisições e respostas

Cálculo de Comissão

![Cálculo da comissão](https://i.postimg.cc/1RcxJBHG/comissoes.png)

Carga Inicial de Produtos

![Carga](https://i.postimg.cc/8P6WcPRQ/Screenshot-21.png)

Movimentação de Estoque

![Movimentação](https://i.postimg.cc/pRpJ3Pnj/Screenshot-22.png)

Containers Docker BackEnd, FrontEnd e Banco de Dados em Execução

![Docker](https://i.postimg.cc/Bn7MmLkv/docker.png)



👨‍💻 **Autor:** Marcelo Moura 

📧 **Email:** [mgmoura@gmail.com](mailto:mgmoura@gmail.com)   
📧 **Email:** [admin@allriders.com.br](mailto:admin@allriders.com.br)   
🐱 **GitHub:** [github.com/marcelogmoura](https://github.com/marcelogmoura)   
🔗 **LinkedIn:** [linkedin.com/in/marcelogmoura](https://www.linkedin.com/in/marcelogmoura/)   
