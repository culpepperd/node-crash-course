const fs = require('fs');

// readStream is variable name
// .createReadStream is ...
// { encoding: 'utf8' } prints the data in a readable format
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });

const writeStream = fs.createWriteStream('./docs/blog4.txt');

// // .on is an event listener
// readStream.on('data', (chunk) => {
//     console.log('-!-!-!-!- NEW CHUNK -!-!-!-!-');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// })

// .pipe performs nearly the same code as above,
// reading a file and writing to a file,
// but with much less code.
readStream.pipe(writeStream);