/* eslint-disable */
import React from 'react';
import Error from './index';

describe('<Error />', () => {
  beforeEach(() => {
    cy.mount(<Error />);
  });

  it('renders', () => {

  });

  it('should render error message with icon and text', () => {
    cy.get('[data-cy="error"]').should('be.visible');
    cy.get('[data-cy="error-icon"]').should('be.visible');
    cy.get('[data-cy="error-message"]').should('be.visible')
      .and('have.text', 'Sorry, we had some problems to get your product')
      .and('have.css', 'color', 'rgb(34, 34, 34)')
      .and('have.css', 'font-weight', '700');
    cy.get('[data-cy="error-message-try-again"]').should('be.visible')
      .and('have.text', 'Please, try again later')
      .and('have.css', 'color', 'rgb(34, 34, 34)')
      .and('have.css', 'font-weight', '400');
  });
});
