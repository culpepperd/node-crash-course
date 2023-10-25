const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

// middleware
app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
});

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Blarp Bleep Bloop'},
        {title: 'Mario finds stars', snippet: 'Blarp Bleep Bloop'},
        {title: 'How to defeat bowser', snippet: 'Blarp Bleep Bloop'},
    ];
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    // res.send('<p>Welcome to the About page!</p>');
    res.render('about', { title: 'About Us' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Creat a new Blog' });
})

// 404 page - this will fire for anything NOT matching
// the above URLs
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});