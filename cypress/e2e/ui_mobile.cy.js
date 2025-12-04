describe('Soal 5 - Mobile Viewport Test', () => {
  it('should show burger menu on iPhone X viewport', () => {

    cy.viewport('iphone-x')
    cy.visit('/')

    cy.get('svg path[d="M4 6h16M4 12h16m-7 6h7"]')
      .should('be.visible')

  })
})
