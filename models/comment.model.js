const mongoose = require('mongoose');

let commentSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
        max: 100
    },
    content: {
        type: String,
        required: true
    },
    recipeId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('comment', commentSchema);