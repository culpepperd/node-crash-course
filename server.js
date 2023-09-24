const http = require('http');

// server variable set to the value of http.createServer
// with a request and response object as parameters
const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
});