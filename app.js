const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://netninja:netninjapassword@nodetuts.jfotpvv.mongodb.net/?retryWrites=true&w=majority';
// connect to db first, .then() callback function with a result, then listen for requests
mongoose.connect(dbURI).then((result) => app.listen(3000, () => {
    console.log("Port 3000 - listening for requests")
    })).catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// morgan middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });

    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
})

app.get('all-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
})

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