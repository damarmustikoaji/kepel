describe('Soal 3 - Hapus Produk dari Keranjang', () => {

  it('Menghapus barang dari cart', () => {

    cy.visit('https://demo.evershop.io/nike-react-infinity-run-flyknit-175?size=5&color=27')

    cy.contains('button', 'ADD TO CART').click()

    cy.contains('a', 'VIEW CART', { timeout: 10000 })
      .should('be.visible')
      .click()

    cy.get('table.items-table')
      .contains('Remove')
      .click()

    cy.contains('Your cart is empty!')
      .should('be.visible')

  })
})
