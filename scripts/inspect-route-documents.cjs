const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'src', 'content', 'route-assets.ts'), 'utf8');

const regex = /"(\/[^"]+)":\s*\[/g;
let match;
const routesWithDocs = [];
while ((match = regex.exec(content)) !== null) {
  routesWithDocs.push(match[1]);
}
console.log('Routes with documents in route-assets.ts:');
console.log(routesWithDocs);
