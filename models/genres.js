const mongoose = require('mongoose');
const Joi = require('joi');

const genreSchema = new mongoose.Schema({

    title: {
        type: String,
    },
});


const Genre = mongoose.model('Genres', genreSchema);

function validateGenre(genre) {

    const schema = {
        title: Joi.string().min(2).max(255).required(),

    };
    return Joi.validate(genre, schema);
}
exports.genreSchema = genreSchema;
exports.Genre = Genre;
exports.validate = validateGenre;