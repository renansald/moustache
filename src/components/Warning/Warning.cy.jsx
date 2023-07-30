/* eslint-disable */
import React from 'react';
import Warning from './index';

describe('<Warning />', () => {
  beforeEach(() => {
    cy.mount(
      <Warning
        message="Sorry, you need to select a size first"
        onClick={() => {}}
      />,
    );
  });

  it('renders', () => {

  });

  it('should render warning message with icon and text', () => {
    cy.get('[data-cy="warning"]').should('be.visible');
    cy.get('[data-cy="warning-icon"]').should('be.visible');
    cy.get('[data-cy="warning-message"]').should('be.visible')
      .and('have.text', 'Sorry, you need to select a size first')
      .and('have.css', 'color', 'rgb(34, 34, 34)')
      .and('have.css', 'font-weight', '700');
    cy.get('[data-cy="warning-button"]').should('be.enabled')
      .and('have.text', 'Close').and('have.css', 'color', 'rgb(34, 34, 34)')
      .and('have.css', 'font-weight', '700');
    cy.get('[data-cy="warning-button"]').realHover();
    cy.get('[data-cy="warning-button"]')
      .should('have.css', 'background-color', 'rgb(34, 34, 34)')
      .and('have.css', 'color', 'rgb(204, 204, 204)')
      .and('have.css', 'font-weight', '700');
  });
});
