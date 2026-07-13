// Page Object da listagem/busca de produtos
class ProductsPage {
  visit() {
    cy.visit('/products');
  }

  // Busca um produto pelo nome usando o campo de busca do site
  searchProduct(productName) {
    cy.get('#search_product').clear().type(productName);
    cy.get('#submit_search').click();
  }

  assertSearchResultsVisible() {
    cy.contains('Searched Products').should('be.visible');
  }

  // Passa o mouse sobre o primeiro produto da lista e clica em "Add to cart"
  addFirstProductToCart() {
    cy.get('.product-image-wrapper').first().trigger('mouseover');
    cy.get('.product-image-wrapper').first().within(() => {
      cy.contains('Add to cart').click({ force: true });
    });
  }

  goToCart() {
    cy.contains('View Cart').click();
  }
}

export default new ProductsPage();
