const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {

    res.send('<p>Hey look, World! No hands!</p>');

});

app.get('/about', (req, res) => {

    res.send('<p>Welcome to the About page!</p>');

});