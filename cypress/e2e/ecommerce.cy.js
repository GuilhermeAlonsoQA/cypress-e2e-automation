// Suite E2E cobrindo os principais fluxos de um site de e-commerce de demonstracao
// Site usado: https://automationexercise.com
// Cada teste usa os Page Objects da pasta cypress/pages para manter o codigo limpo
import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('E-commerce - Fluxos principais', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve exibir erro ao tentar logar com credenciais invalidas', () => {
    LoginPage.visit();
    LoginPage.login('usuario_invalido@teste.com', 'senhaErrada123');
    LoginPage.assertLoginError();
  });

  it('Deve buscar um produto e exibir os resultados da busca', () => {
    ProductsPage.visit();
    ProductsPage.searchProduct('Dress');
    ProductsPage.assertSearchResultsVisible();
  });

  it('Deve adicionar um produto ao carrinho', () => {
    ProductsPage.visit();
    ProductsPage.addFirstProductToCart();
    ProductsPage.goToCart();
    cy.url().should('include', '/view_cart');
  });

  it('Deve avancar do carrinho ate a tela de checkout', () => {
    ProductsPage.visit();
    ProductsPage.addFirstProductToCart();
    ProductsPage.goToCart();
    CartPage.proceedToCheckout();
    // O site exige login/cadastro antes do checkout final,
    // entao aqui validamos que a etapa de checkout e alcancada
    cy.contains('Checkout').should('be.visible');
  });

});
