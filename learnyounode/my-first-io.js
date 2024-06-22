const fs = require("fs");

const buf = fs.readFileSync(process.argv[2], 'utf8');
//const content = buf.toString();
const lines = content.split("\n");

console.log(lines.length - 1);
