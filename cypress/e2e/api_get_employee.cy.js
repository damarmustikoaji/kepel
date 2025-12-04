describe('01 GET Employee - validate against Excel control data', () => {

  it('should match API response with Excel control data', () => {
    cy.task('readExcel', { file: 'cypress/fixtures/get_employee_control.xlsx' })
      .then((controlData) => {

        cy.request('GET', 'http://dummy.restapiexample.com/api/v1/employees')
          .then((resp) => {

            expect(resp.status).to.eq(200);
            expect(resp.body.status).to.eq('success');

            const apiData = resp.body.data;

            const sortedApi = [...apiData].sort((a, b) => Number(a.id) - Number(b.id));
            const sortedControl = [...controlData].sort(
              (a, b) => Number(a.id) - Number(b.id)
            );

            expect(sortedApi.length).to.eq(sortedControl.length);

            sortedControl.forEach((row, i) => {
              const api = sortedApi[i];

              expect(api.id.toString()).to.eq(row.id.toString());
              expect(api.employee_name).to.eq(row.employee_name);
              expect(api.employee_salary.toString()).to.eq(row.employee_salary.toString());
              expect(api.employee_age.toString()).to.eq(row.employee_age.toString());
              expect(api.profile_image).to.eq(row.profile_image || "");
            });
          });
      });
  });

});
