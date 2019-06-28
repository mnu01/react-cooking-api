const mongoose = require('mongoose');

let itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 100
    },
    quantity: {
        type: String,
        required: true,
        max: 100
    },
    image: {
        type: String,
        required: false
    },
    recipeId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('item', itemSchema);