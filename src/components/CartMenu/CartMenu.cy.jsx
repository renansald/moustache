/* eslint-disable */
import React from 'react';
import CartMenu from './index';

const itemsMock = [
  {
    name: 'Classic Tee',
    total: 1,
    price: 75,
    size: 'S',
  },
  {
    name: 'Classic Tee black',
    total: 1,
    price: 85,
    size: 'M',
  },
];

describe('<CartMenu />', () => {
  beforeEach(() => {
    cy.mount(
      <CartMenu
        items={itemsMock}
      />,
    );
  });

  it('renders', () => {

  });

  it('should render error message with icon and text', () => {
    cy.viewport(1280, 720);
    cy.get('[data-cy="cart-menu"]').as('buttonMenu').should('be.enabled')
      .and('have.css', 'color', 'rgb(136, 136, 136)');
    cy.get('@buttonMenu').realHover();
    cy.get('@buttonMenu').should('have.css', 'background-color', 'rgb(204, 204, 204)')
      .and('have.css', 'color', 'rgb(34, 34, 34)');
    cy.get('[data-cy="cart-button-lg"]').should('be.visible')
      .and('have.text', 'Cart (2)');
    cy.get('[data-cy="cart-button-sm"]').should('not.be.visible');
    cy.get('@buttonMenu').click();
    cy.get('[data-cy="cart-item"]').should('be.visible');
    cy.get('[data-cy="cart-item-image"]').should('be.visible').and('have.length', 2);
    cy.get('[data-cy="cart-item-name"]').should('be.visible')
      .and('have.length', 2).as('cartItemName');
    cy.get('@cartItemName').first().should('have.text', 'Classic Tee');
    cy.get('@cartItemName').last().should('have.text', 'Classic Tee black');
    cy.get('[data-cy="cart-item-total"]').should('be.visible').and('have.length', 2).as('cartItemTotal');
    cy.get('@cartItemTotal').first().should('have.text', '1 x $75');
    cy.get('@cartItemTotal').last().should('have.text', '1 x $85');
    cy.get('[data-cy="cart-item-size"]').should('be.visible').and('have.length', 2).as('cartItemSize');
    cy.get('@cartItemSize').first().should('have.text', 'Size: S');
    cy.get('@cartItemSize').last().should('have.text', 'Size: M');
  });

  it('Should rerende menu button when screen is smaller than 768px', () => {
    cy.viewport(1280, 720);
    cy.get('[data-cy="cart-button-lg"]').should('be.visible')
      .and('have.text', 'Cart (2)');
    cy.get('[data-cy="cart-button-sm"]').should('not.be.visible');
    cy.get('[data-cy="cart-icon"]').should('not.be.visible');
    cy.viewport(767, 720);
    cy.get('[data-cy="cart-button-lg"]').should('not.be.visible');
    cy.get('[data-cy="cart-button-sm"]').should('be.visible')
      .and('have.text', ' (2)');
    cy.get('[data-cy="cart-icon"]').should('be.visible');
  });
});
