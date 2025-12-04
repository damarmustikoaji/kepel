# Deskripsi
Project ini merupakan **Automation Test** menggunakan **Cypress 15+**.  
Berisi contoh **API** dan **UI automation tests** yang dapat dijalankan secara headless maupun interactive.  

**Fitur utama:**
1. **API Testing**
   - GET Employee endpoint dengan validasi data terhadap file Excel control.
   - POST Product endpoint (positif & negatif test cases) terhadap file Excel control.
2. **UI Testing**
   - E-commerce flow di [demo.evershop.io](https://demo.evershop.io)
     - Register (page not found)
     - Add to Cart (namanya demo shop) / Delete
     - Checkout (pembayaran: cash)
     - Mobile viewport (iPhone X: Verifikasi responsive elements hamburger menu/nav).

---

# Pre-requisites / Requirements
- Node.js v16+ / v18+ (tested on Node 25.2.1)
- npm / yarn
- Cypress 15+ (instal melalui npm)
- Browser modern (Electron, Chrome, Firefox)
- Excel file fixtures (`.xlsx`) berada di `cypress/fixtures/`  

Opsional:
- Visual Studio Code atau editor lain untuk melihat dan memodifikasi test scripts.

---

# Instalasi

1. Clone repository:
```bash
git clone <repository-url>
cd <repository>
```

2. Install dependencies:
```bash
npm install
```

3. (Opsional) Open Cypress interactive GUI:
```bash
npx cypress open
```

4. Jalankan tests headless:
```bash
npx cypress run
npx cypress run --spec cypress/e2e/api_get_employee.cy.js
```

# Structure
```bash
├── cypress/                         
│   ├── e2e                         
│   ├── fixtures
│   └── support                 
│
├── data/                         
│   ├── users.json        
│   └── .json
│
├── utils/                         
│   ├── helpers.ts        
│   └── .ts
│
├── cypress.config.js
├── package.json
└── README.md
```

# Report
```bash
npm run cypress:run:json
npm run merge-reports
npm run generate-report
```


### Github Action
- <repository-url>/kepel/actions

# Summary

**Project:** Cypress: API x UI
**Run Mode:** Headless (`npx cypress run`)  

---

## Overall Results

| Spec File                  | Total Tests | Passed | Failed | Pending | Skipped | Duration |
|----------------------------|------------|-------|-------|---------|---------|---------|
| api_get_employee.cy.js      | 1          | 0     | 1     | 0       | 0       | 00:02   |
| api_post_employee.cy.js     | 3          | 1     | 2     | 0       | 0       | 00:01   |
| ui_add_to_cart.cy.js        | 1          | 1     | 0     | 0       | 0       | 00:08   |
| ui_checkout.cy.js           | 1          | 1     | 0     | 0       | 0       | 00:20   |
| ui_delete_cart.cy.js        | 1          | 1     | 0     | 0       | 0       | 00:05   |
| ui_mobile.cy.js             | 1          | 1     | 0     | 0       | 0       | 00:03   |
| ui_register.cy.js           | 1          | 0     | 1     | 0       | 0       | 675ms   |

**Total Specs:** 7  
**Total Tests:** 9  
**Passed:** 5  
**Failed:** 4  
**Pass Rate:** 55%  

---

## Detailed Failures

### 1) api_get_employee.cy.js - GET Employee
- Test: `should match API response with Excel control data`  
- Error: `AssertionError: expected 'Sonya Frost' to equal 'Sonya Hosianna'`  
- Notes: Mismatch pada `employee_name` antara API dan Excel control data.

### 2) api_post_employee.cy.js - POST Employee
- Test: `CASE negative_price` → expected 400, got 201  
- Test: `CASE negative_empty` → expected 400, got 201  
- Notes: Response code tidak sesuai untuk negative scenarios.

### 3) ui_register.cy.js - Navigasi & Validasi URL
- Test: `should open homepage, create account, and validate /register in URL`  
- Error: `CypressError: cy.visit() failed (404 Not Found)`  
- Notes: Halaman `/register` tidak tersedia di demo.evershop.io

---

## Notes / Recommendations
1. **API GET Employee:** Periksa kesesuaian data Excel vs response API.  
2. **POST Employee negative tests:** Pastikan server mengembalikan response code sesuai ekspektasi (400 untuk invalid).  
3. **UI register:** Perlu memastikan aplikasi demo shop tersedia fitur apa saja.  
4. Semua UI lain sesuai ekspektasi.