// Configuracao principal do Cypress
// baseUrl aponta para o site publico de e-commerce de demonstracao usado nos testes
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: false,
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
