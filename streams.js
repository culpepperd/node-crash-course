const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt');

// .on is an event listener
readStream.on('data', (chunk) => {
    console.log('-!-!-!-!- NEW CHUNK -!-!-!-!-');
    console.log(chunk.toString());
})