# Cypress E2E Automation

![Cypress Tests](https://github.com/GuilhermeAlonsoQA/cypress-e2e-automation/actions/workflows/cypress.yml/badge.svg)

## Objetivo

Este projeto e uma suite de testes end-to-end (E2E) automatizados com Cypress, criada como parte do meu portfolio de QA Junior. O objetivo e demonstrar, de forma simples e didatica, como estruturar testes automatizados usando o padrao Page Object Model (POM) e integracao continua com GitHub Actions.

Os testes cobrem os principais fluxos de um site publico de e-commerce de demonstracao ([automationexercise.com](https://automationexercise.com)):

- Login (incluindo validacao de erro com credenciais invalidas)
- Busca de produto
- Adicionar produto ao carrinho
- Avancar para a tela de checkout

## Tecnologias usadas

- [Cypress](https://www.cypress.io/) - framework de testes E2E em JavaScript
- Node.js
- GitHub Actions - execucao automatica dos testes a cada push

## Estrutura do projeto

```
cypress/
  e2e/
    ecommerce.cy.js       -> arquivo com os cenarios de teste
  pages/
    LoginPage.js          -> Page Object da tela de login
    ProductsPage.js       -> Page Object de busca/listagem de produtos
    CartPage.js           -> Page Object do carrinho de compras
    CheckoutPage.js       -> Page Object da tela de checkout
.github/workflows/
  cypress.yml             -> workflow do GitHub Actions
cypress.config.js         -> configuracao do Cypress (baseUrl, specPattern etc)
```

## Por que Page Object Model (POM)?

O POM organiza o codigo separando "o que a pagina faz" (os Page Objects, em cypress/pages) de "o que o teste verifica" (os arquivos .cy.js, em cypress/e2e). Isso deixa os testes mais faceis de ler e de manter: se um seletor da pagina mudar, so precisamos ajustar em um lugar.

## Como rodar o projeto localmente

Pre-requisitos: Node.js instalado (versao 18 ou superior).

1. Clone o repositorio:
   ```
   git clone https://github.com/GuilhermeAlonsoQA/cypress-e2e-automation.git
   cd cypress-e2e-automation
   ```

2. Instale as dependencias:
   ```
   npm install
   ```

3. Rode os testes em modo interativo (abre a interface do Cypress):
   ```
   npm run cy:open
   ```

4. Ou rode os testes em modo headless (linha de comando):
   ```
   npm run cy:run
   ```

## Integracao continua (CI)

Este repositorio possui um workflow em .github/workflows/cypress.yml que roda todos os testes automaticamente a cada push ou pull request na branch main, usando a action oficial cypress-io/github-action. O badge no topo deste README mostra o status da ultima execucao.

## Sobre este projeto

Sou QA Junior em transicao de carreira e este repositorio faz parte do meu portfolio de automacao de testes. O codigo foi escrito propositalmente de forma simples e comentada, priorizando clareza sobre complexidade.
