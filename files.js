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
// existsSync checks if the file path exists
// if (!fs.existsSync('./assets')) {
//     // mkdir creates the new folder
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder created');
//     })
// } else {
//     // rmdir deletes the folder
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('folder deleted');
//     })
// }


// deleting files
if (!fs.existsSync('./docs/deleteme.txt')) {
    fs.writeFile('./docs/deleteme.txt', 'Delete me!', () => {
        console.log('deleteme.txt was created!');
    })
} else {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted!');
    })
}