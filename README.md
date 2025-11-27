# 🚀 Desafio Fullstack - Gestão de Vendas e Estoque

Este projeto é uma solução completa (Fullstack) desenvolvida para resolver desafios de lógica de negócio, cálculo de comissões e gestão de estoque. A arquitetura foi desenhada seguindo as melhores práticas de mercado, focando em **Escalabilidade**, **Manutenibilidade** e **Desacoplamento**.

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
- **TypeScript**: Tipagem estática para maior segurança.

### Infraestrutura & DevOps
- **Docker Compose**: Orquestração dos containers (API + SQL Server).
- **Dockerfile**: Containerização otimizada da aplicação .NET.

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
- [Node.js](https://nodejs.org/) (para o Front-end).
- [.NET 8 SDK](https://dotnet.microsoft.com/download) (opcional, caso queira rodar fora do Docker).

### Passo 1: Subir o Back-end (Docker)

Na raiz do projeto (onde está o arquivo `docker-compose.yml`), execute:

```bash
docker-compose up -d --build