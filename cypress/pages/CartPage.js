// Page Object da pagina de carrinho de compras
class CartPage {
  // Confirma que o produto adicionado aparece na tabela do carrinho
  assertProductInCart(productName) {
    cy.get('#cart_info_table').should('contain.text', productName);
  }

  proceedToCheckout() {
    cy.contains('Proceed To Checkout').click();
  }
}

export default new CartPage();
