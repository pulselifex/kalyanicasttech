const fs = require('fs');

const content = fs.readFileSync('src/routes/investor-relations.tsx', 'utf8');
const docLinks = [];
const regex = /href=["'](\/documents\/[^"']+)["']/g;
let m;
while ((m = regex.exec(content)) !== null) {
  docLinks.push(m[1]);
}
console.log('Direct doc links in investor-relations.tsx:', docLinks);

