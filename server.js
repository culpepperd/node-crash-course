const http = require('http');

// server variable set to the value of http.createServer
// with a request and response object as parameters
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // 1. Set header content type
    res.setHeader('Content-Type', 'text/html');

    // 2. Write content to the browser
    res.write('<head><link rel="stylesheet" href="#"></head>');
    res.write('<p>Hello, World!</p>');
    res.write('<p>Hello again, World!</p>');

    // 3. End the response
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
});