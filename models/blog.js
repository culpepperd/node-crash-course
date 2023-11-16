const mongoose = require('mongoose');
// Schema is a constructor function
const Schema = mongoose.Schema;

// a schema defines the structure of our documents
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true});

// create a model based on blogSchema
// a model surrounds the schema and provides an interface for 
// communicating with the db collection for that document type
// 'Blog' will be pluralized (IDK why...)
const Blog = mongoose.model('Blog', blogSchema);