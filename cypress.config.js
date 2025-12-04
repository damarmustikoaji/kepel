
const { defineConfig } = require('cypress')
const XLSX = require("xlsx");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.js',
    setupNodeEvents(on, config) {
      // implement node events if needed
      on("task", {
        readExcel({ file }) {
          const fullPath = path.resolve(__dirname, file);
          const workbook = XLSX.readFile(fullPath);
          const sheet = workbook.Sheets[workbook.SheetNames[0]];
          const json = XLSX.utils.sheet_to_json(sheet);
          return json;
        }
      });
      return config
    },
  },
})
