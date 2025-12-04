# Kepel

## Deskripsi
Project ini merupakan **Automation Test** menggunakan **Cypress 15+**.  
Berisi contoh **API** dan **UI automation tests** yang dapat dijalankan secara headless maupun interactive.  

**Fitur utama:**
1. **API Testing**
   - GET Employee endpoint dengan validasi data terhadap file Excel control.
   - POST Product endpoint (positif & negatif test cases) terhadap file Excel control.
2. **UI Testing**
   - E-commerce flow di [demo.evershop.io](https://demo.evershop.io)
     - Register (not found)
     - Add to Cart (sedapatnya namanya juga demo shop) / Delete
     - Checkout (pembayaran: cash)
     - Mobile viewport (iPhone X: Verifikasi responsive elements hamburger menu nav).

---

## Pre-requisites / Requirements
- Node.js v16+ / v18+ (tested on Node 25.2.1)
- npm / yarn
- Cypress 15+ (instal melalui npm)
- Browser modern (Electron, Chrome, Firefox)
- Excel file fixtures (`.xlsx`) berada di `cypress/fixtures/`  

Opsional:
- Visual Studio Code atau editor lain untuk melihat dan memodifikasi test scripts.

---

## Instalasi

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

## Structure
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

## Report

### Github Action
- https://github.com/damarmustikoaji/kepel/actions