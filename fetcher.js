let urlInput = process.argv[2];
let filePath = process.argv[3];

console.log(urlInput);

const fs = require('fs');
const reqeust = require('request');

fs.writeFile(`./${filePath}`);



