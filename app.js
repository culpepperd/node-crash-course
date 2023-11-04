const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://Karn:YWXdGeZvQhE84aLo@nodetuts.pebzrpt.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

// morgan middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));

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