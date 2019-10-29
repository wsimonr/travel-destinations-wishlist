describe('main window', () => {
  it('has correct header and in english by default', () => {
    cy.visit('http://localhost:4200');
    cy.contains('WishList of Travel Destinations');
    cy.get('h1 b').should('contain', 'HELLO en');
  });
});
