const fs = require('fs');

const content = fs.readFileSync(process.argv[2], 'utf8');
const arrContent = content.split('\n');
const numOfEnter = arrContent.length - 1;

console.log(numOfEnter);