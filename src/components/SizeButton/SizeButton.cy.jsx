/* eslint-disable */
import React from 'react';
import SizeButton from './index';

describe('<SizeButton />', () => {
  beforeEach(() => {});
  it('renders', () => {
    cy.mount(
      <SizeButton
        onClick={() => {}}
        title="S"
        isActive={false}
      />,
    );
  });

  it('should change color on hover', () => {
    cy.mount(
      <SizeButton
        onClick={() => {}}
        title="S"
        isActive={false}
      />,
    );
    cy.get('[data-cy="size-button"]').as('button')
      .should('be.enabled')
      .should('have.text', 'S')
      .and('have.css', 'color', 'rgb(204, 204, 204)')
      .and('have.css', 'font-weight', '400')
      .and('have.css', 'height', '40px')
      .and('have.css', 'width', '40px');
    cy.get('@button').realHover();
    cy.get('@button').should('have.css', 'background-color', 'rgb(246, 246, 247)')
      .and('have.css', 'color', 'rgb(34, 34, 34)')
      .and('have.css', 'font-weight', '400')
      .and('have.css', 'height', '40px')
      .and('have.css', 'width', '40px');
  });

  it('Should change color when is active', () => {
    cy.mount(
      <SizeButton
        onClick={() => {}}
        title="S"
        isActive
      />,
    );
    cy.get('[data-cy="size-button"]').should('be.enabled')
      .should('have.text', 'S')
      .and('have.css', 'background-color', 'rgb(246, 246, 247)')
      .and('have.css', 'color', 'rgb(34, 34, 34)')
      .and('have.css', 'font-weight', '700')
      .and('have.css', 'height', '40px')
      .and('have.css', 'width', '40px');
  });
});
