describe('Soal 4 - Checkout Flow', () => {

  it('success checkout', () => {

    cy.visit('https://demo.evershop.io/nike-react-infinity-run-flyknit-175?size=5&color=27');

    cy.contains('button', 'ADD TO CART').click();

    cy.contains('a', 'VIEW CART', { timeout: 10000 })
      .should('be.visible')
      .click();

    cy.contains('a.button.primary', 'CHECKOUT')
      .should('be.visible')
      .click();

    cy.get('input[name="email"]').type('lucu@test.nya');
    cy.contains('button', 'Continue to shipping').click();

    cy.get('input[name="address[full_name]"]').type('Damar QA');
    cy.get('input[name="address[telephone]"]').type('08123456789');
    cy.get('input[name="address[address_1]"]').type('Jl. Testing Cypress No. 123');
    cy.get('input[name="address[city]"]').type('Jakarta');

    cy.get('select[name="address[country]"]').select('US');
    cy.get('select[name="address[province]"]').select('US-CA');

    cy.get('input[name="address[postcode]"]').type('12345');

    cy.get('#method0').check({ force: true });

    cy.contains('button', 'Continue to payment').click();

    cy.contains('h4', 'Payment Method').should('be.visible');

    cy.get('#useShippingAddress').should('be.checked');

    cy.contains('h4', 'Payment Method').should('be.visible');
    cy.get('.payment-method-list a').eq(1).click({ force: true });
    cy.get('.payment-method-list a').eq(2).click({ force: true });
    cy.get('.payment-method-list a').eq(0).click({ force: true });

    cy.wait(3000);
    cy.contains('button', 'Place Order')
      .should('be.visible')
      .click();

    cy.contains('h3', 'Thank you', { timeout: 15000 })
      .should('be.visible');

  });

});
