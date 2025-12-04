const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

function readExcel(relativePath) {
  const fullPath = path.resolve(process.cwd(), relativePath);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Excel file not found at path: ${fullPath}`);
  }

  const workbook = XLSX.readFile(fullPath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  return XLSX.utils.sheet_to_json(sheet);
}

module.exports = { readExcel };
