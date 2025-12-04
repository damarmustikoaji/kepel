describe('02 POST Employee - Excel-driven tests (static it)', () => {
  const url = 'https://fakestoreapi.com/products';
  let rows = [];

  before(() => {
    return cy.task('readExcel', { file: 'cypress/fixtures/post_inputs.xlsx' })
      .then((data) => (rows = data));
  });

  it('CASE positive_title', () => {
    const c = rows.find(r => r.case === 'positive_title');

    const body = {
      title: c.title,
      price: Number.isFinite(+c.price) ? +c.price : c.price,
      description: c.description,
      category: c.category,
      image: c.image
    };

    cy.request({
      method: 'POST',
      url,
      body,
      failOnStatusCode: false
    }).then((resp) => {
      expect(resp.status).to.eq(Number(c.expectedStatus));
    });
  });

  it('CASE negative_price', () => {
    const c = rows.find(r => r.case === 'negative_price');

    const body = {
      title: c.title,
      price: Number.isFinite(+c.price) ? +c.price : c.price,
      description: c.description,
      category: c.category,
      image: c.image
    };

    cy.request({
      method: 'POST',
      url,
      body,
      failOnStatusCode: false
    }).then((resp) => {
      expect(resp.status).to.eq(Number(c.expectedStatus));
    });
  });

  it('CASE negative_empty', () => {
    const c = rows.find(r => r.case === 'negative_empty');

    const body = {
      title: c.title,
      price: Number.isFinite(+c.price) ? +c.price : c.price,
      description: c.description,
      category: c.category,
      image: c.image
    };

    cy.request({
      method: 'POST',
      url,
      body,
      failOnStatusCode: false
    }).then((resp) => {
      expect(resp.status).to.eq(Number(c.expectedStatus));
    });
  });

});
