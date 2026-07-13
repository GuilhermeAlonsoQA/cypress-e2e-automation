// Page Object da etapa de checkout
class CheckoutPage {
  // Confirma que chegamos na tela de revisao do pedido
  assertOrderSummaryVisible() {
    cy.contains('Address Details').should('be.visible');
    cy.contains('Review Your Order').should('be.visible');
  }

  addOrderComment(comment) {
    cy.get('textarea[name="message"]').type(comment);
  }

  placeOrder() {
    cy.contains('Place Order').click();
  }
}

export default new CheckoutPage();
