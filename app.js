const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://nodejscrashcourse:nodejscrashcoursepassword@youtubevideocluster.iqcvkvl.mongodb.net/?retryWrites=true&w=majority';
// connect to db first, then callback function with a result, then listen for requests
mongoose.connect(dbURI).then((result) => app.listen(3000, () => {
    console.log("Port 3000 - listening for requests")
    })).catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

/*
async function connect() {
    try {
        await mongoose.connect(dbURI)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}

connect();
*/
// listen for requests
// app.listen(3000, () => {
//     console.log("Server started on port 3000");
// });

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