const mongoose = require('mongoose');
const Joi = require('joi');



const listSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    quantity: {
        type: Number
    },
    unity: {
        type: String
    },
    idIngredient: {
        type: String
    }
});


const List = mongoose.model('List', listSchema);

function validateList(List) {

    const schema = {
        title: Joi.string().min(2).max(255).required(),
        quantity: Joi.number().min(0).max(2000).required(),
        unity: Joi.string(),
        idIngredient: Joi.string().min(2).max(255).required(),

    };
    return Joi.validate(List, schema);
}
exports.listSchema = listSchema;
exports.List = List;
exports.validate = validateList;