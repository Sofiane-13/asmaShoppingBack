const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shooping', {
    useNewUrlParser: true
});

const app = express();

require('./startup/routes')(app);


app.listen(3000, () => console.log('Listning on 3000 ...'));