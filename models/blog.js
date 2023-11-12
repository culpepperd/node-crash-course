const mongoose = require('mongoose');
// Schema is a constructor function
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});