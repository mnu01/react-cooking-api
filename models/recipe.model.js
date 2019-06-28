const mongoose = require('mongoose');

let recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 100
    },
    difficulty: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('recipe', recipeSchema);