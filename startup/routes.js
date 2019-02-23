const receipts = require('../routes/receipts');
const genres = require('../routes/genres');
const shoppingList = require('../routes/shoppingList');
const ingredients = require('../routes/ingredients');
const root = require('../routes/root');


const express = require('express');
var cors = require('cors')

module.exports = function (app) {
    app.use(cors());
    app.use(express.json());
    app.use('/api/receipts', receipts);
    app.use('/api/genres', genres);
    app.use('/api/shoppingList', shoppingList);
    app.use('/api/ingredients', ingredients);
    app.use('/api', root);


}