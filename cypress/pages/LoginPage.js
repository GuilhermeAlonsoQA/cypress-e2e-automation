// Page Object da tela de login do site automationexercise.com
// Concentra aqui os seletores e acoes da pagina, para que os testes fiquem simples de ler
class LoginPage {
  visit() {
    cy.visit('/login');
  }

  fillEmail(email) {
    cy.get('[data-qa="login-email"]').clear().type(email);
  }

  fillPassword(password) {
    cy.get('[data-qa="login-password"]').clear().type(password);
  }

  submit() {
    cy.get('[data-qa="login-button"]').click();
  }

  // Metodo de conveniencia que preenche e envia o formulario de uma vez
  login(email, password) {
    this.fillEmail(email);
    this.fillPassword(password);
    this.submit();
  }

  // Verifica se o login foi bem-sucedido checando o link "Logged in as"
  assertLoggedIn(username) {
    cy.contains('Logged in as').should('contain.text', username);
  }

  // Verifica a mensagem de erro exibida para credenciais invalidas
  assertLoginError() {
    cy.contains('Your email or password is incorrect!').should('be.visible');
  }
}

export default new LoginPage();
