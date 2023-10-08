const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>Hey look, World! No hands!</p>');
    res.render('index');
});

app.get('/about', (req, res) => {
    // res.send('<p>Welcome to the About page!</p>');
    res.render('about');
});

// redirects
app.get('/about-us', (req, res) => {
    // res.send('<p>Welcome to the About page!</p>');
    res.redirect('/about');
});

// 404 page - this will fire for anything NOT matching
// the above URLs
app.use((req, res) => {
    res.status(404).render('404');
});