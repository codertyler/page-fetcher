let urlInput = process.argv[2];
let filePath = process.argv[3];

// console.log(urlInput);

const fs = require('fs');
const request = require('request');

// fs.writeFile(`./${filePath}`);

request(`${urlInput}`, function(error, response, body){
  
  

    const writingFile = fs.writeFile(`${filePath}`, body, (err) => {
      if (err) process.exit();
      
      let stats = fs.statSync(`${filePath}`);
      let bytes = stats.size;
       


      console.log(`Downloaded and saved ${bytes} bytes in ${filePath}`);
  })


})
  



