/* eslint-disable */
const baseUrl = 'https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com';

const addProductToCart = (item) => {
  cy.get('[data-cy="size-product-buttons"]').children().eq(item).click();
  cy.get('[data-cy=add-cart-button]').click();
};

describe('Main page E2E error request test', () => {
  it('Must render a error component', () => {
    cy.intercept('GET', `${baseUrl}/**`, {
      statusCode: 500,
      body: { error: 'Server Error' },
    }).as('request');
    cy.visit('http://localhost:3000');
    cy.wait('@request');
    cy.get('[data-cy="header"]').should('be.visible');
    cy.get('[data-cy="cart-menu"]').should('be.visible');
    cy.get('[data-cy="cart-button-lg"]').should('be.visible').should('have.text', 'Cart (0)');
    cy.get('[data-cy="cart-button-sm"]').should('not.be.visible');
    cy.get('[data-cy="error"]').should('be.visible');
    cy.get('[data-cy="error-icon"]').should('be.visible');
    cy.get('[data-cy="error-message"]').should('be.visible')
      .should('have.text', 'Sorry, we had some problems to get your product');
    cy.get('[data-cy="error-message-try-again"]').should('be.visible')
      .should('have.text', 'Please, try again later');
    cy.get('[data-cy="page__content"]').should('not.exist');
  });
});

describe('Main page E2E tests', () => {
  beforeEach(() => {
    cy.intercept(`${baseUrl}/**`, {
      fixture: 'product.json',
    }).as('request');
    cy.visit('http://localhost:3000');
    cy.wait('@request');
  });

  it('Must render product with sizes', () => {
    cy.get('[data-cy="header"]').should('be.visible');
    cy.get('[data-cy="cart-menu"]').should('be.visible');
    cy.get('[data-cy="page-content"]').should('be.visible');
    cy.get('[data-cy="product-image"]').should('be.visible');
    cy.get('[data-cy="title-product"]').should('be.visible')
      .and('have.text', 'Classic Tee');
    cy.get('[data-cy="price-product"]').should('be.visible')
      .and('have.text', '$ 75.00');
    cy.get('[data-cy="description-product"]').should('be.visible')
      .and('have.text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.');
    cy.get('[data-cy="size-product"]').as('sizeSelected').should('be.visible').and('have.text', 'Size* ');
    cy.get('[data-cy="size-product-buttons"]').should('be.visible')
      .children().as('sizeButtons')
      .should('have.length', 3);
    cy.get('@sizeButtons').eq(0).should('have.text', 'S').and('be.enabled');
    cy.get('@sizeButtons').eq(1).should('have.text', 'M').and('be.enabled');
    cy.get('@sizeButtons').eq(2).should('have.text', 'L').and('be.enabled');
    cy.get('[data-cy="add-cart-button"]').should('be.visible').and('be.enabled')
      .and('have.text', 'ADD TO CART');
    cy.get('@sizeButtons').eq(0).click();
    cy.get('@sizeSelected').should('have.text', 'Size* S');
  });

  it('Must render a alert to user when click add cart withous size selected', () => {
    cy.get('[data-cy=add-cart-button]').should('be.visible')
      .should('have.text', 'ADD TO CART').click();
    cy.get('[data-cy="warning"]').should('be.visible');
    cy.get('[data-cy="warning-icon"]').should('be.visible');
    cy.get('[data-cy="warning-message"]').should('be.visible')
      .should('have.text', 'Please, select a size');
    cy.get('[data-cy="warning-button"]').should('be.enabled')
      .and('have.text', 'Close')
      .click();
    cy.get('[data-cy="warning"]').should('not.exist');
  });

  it('Must add product to cart and increase quantity', () => {
    addProductToCart(0);
    cy.get('[data-cy="cart-button-lg"]').should('be.visible').and('have.text', 'Cart (1)');
    addProductToCart(1);
    cy.get('[data-cy="cart-button-lg"]').should('be.visible').and('have.text', 'Cart (2)');
    cy.get('[data-cy=add-cart-button]').click();
    cy.get('[data-cy="cart-button-lg"]').should('be.visible').and('have.text', 'Cart (3)');
    addProductToCart(2);
    cy.get('[data-cy="cart-button-lg"]').should('be.visible').and('have.text', 'Cart (4)');
  });
});
