describe('Homepage', () => {
  it('should load the homepage', () => {
    cy.visit('http://localhost:3000'); // Change port if your app runs elsewhere
    cy.contains('Loading').should('exist'); // Or any text you expect on your homepage
  });
});
