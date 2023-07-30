/* eslint-disable */
import React from 'react';
import AddCartButton from './index';

describe('<AddCartButton />', () => {
  beforeEach(() => {
    cy.mount(<AddCartButton />);
  });

  it('renders', () => {
  });

  it('should change color on hover', () => {
    cy.get('[data-cy="add-cart-button"]').as('button')
      .should('be.enabled')
      .and('have.css', 'color', 'rgb(34, 34, 34)');
    cy.get('@button').realHover();
    cy.get('@button').should('have.css', 'background-color', 'rgb(34, 34, 34)')
      .and('have.css', 'color', 'rgb(136, 136, 136)');
  });
});
