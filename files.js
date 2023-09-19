// importing the built-in fs "File System" module
const fs = require('fs');

// reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line');

// writing files
// fs.writeFile('./docs/blog1.txt', 'Hello, from blog1.txt!', () => {
//     console.log('file was written');
// });

// fs.writeFile('./docs/blog2.txt', 'Hello, from blog2.txt!', () => {
//     console.log('file was written');
// });

// directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
            console.log('folder already exists');
        }
        console.log('folder created');
    })
}


// deleting files