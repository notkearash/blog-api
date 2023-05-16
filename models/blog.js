const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Blog', blogSchema);