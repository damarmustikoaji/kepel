
describe('SOAL 1 - Navigasi & Validasi URL', () => {
  it('should open homepage, create account, and validate /register in URL', () => {
    cy.visit('https://demo.evershop.io/register')
    cy.url().should('include', '/register')
    cy.contains('h1', '404 Page Not Found').should('be.visible');
  })
})
