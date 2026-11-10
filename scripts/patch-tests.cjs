const fs = require('fs');
const path = require('path');

// 1. shivlakha-page.test.tsx
const shivPath = path.join(__dirname, '..', 'src', 'test', 'shivlakha-page.test.tsx');
let shiv = fs.readFileSync(shivPath, 'utf8');
const target = 'it("renders the mandatory internal draft verification badge", () => {\r\n      render(<ShivlakhaPage />);\r\n      expect(screen.getByText(/Internal draft — verify\\/approve before publication/i)).toBeInTheDocument();\r\n    });';
const replacement = 'it("ensures public internal draft verification badge is eradicated per WP-5B.13", () => {\r\n      render(<ShivlakhaPage />);\r\n      expect(screen.queryByText(/Internal draft — verify\\/approve before publication/i)).not.toBeInTheDocument();\r\n    });';
if (shiv.includes(target)) {
  shiv = shiv.replace(target, replacement);
  fs.writeFileSync(shivPath, shiv, 'utf8');
  console.log('Successfully patched shivlakha-page.test.tsx');
} else {
  console.log('Target not found in shivlakha-page.test.tsx');
}

// 2. journey-page.test.tsx
const jrnPath = path.join(__dirname, '..', 'src', 'test', 'journey-page.test.tsx');
let jrn = fs.readFileSync(jrnPath, 'utf8');
const jrnTarget = '/An evolving journey in industrial manufacturing, specialised products and terminal infrastructure development\\./i';
const jrnReplacement = '/An evolving journey in industrial manufacturing, specialised products and terminal infrastructure development/i';
if (jrn.includes(jrnTarget)) {
  jrn = jrn.replace(jrnTarget, jrnReplacement);
  fs.writeFileSync(jrnPath, jrn, 'utf8');
  console.log('Successfully patched journey-page.test.tsx');
} else {
  console.log('Target not found in journey-page.test.tsx');
}

