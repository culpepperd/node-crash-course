const fs = require('fs');

// readStream is variable name
// .createReadStream is ...
// { encoding: 'utf8' } prints the data in a readable format
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });

const writeStream = fs.createWriteStream('./docs/blog4.txt');

// Event listener
// readStream.on('data', (chunk) => {
//     console.log('-!-!-!-!- NEW CHUNK -!-!-!-!-');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// })

readStream.pipe(writeStream);