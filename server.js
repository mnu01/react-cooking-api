const bodyParser = require('body-parser');
const express = require('express');
const items = require('./routes/items.route');
const recipes = require('./routes/recipes.route');
const comments = require('./routes/comments.route');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection failed'));

const logger = (request, response, next) => {
    console.log(request.url);
    next();
}

app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/items', items);
app.use('/recipes', recipes);
app.use('/comments', comments);

app.listen(process.env.PORT, () => { console.log(`Server running on port ${process.env.PORT}`); });