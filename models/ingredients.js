const mongoose = require('mongoose');
const Joi = require('joi');

const ingredientSchema = new mongoose.Schema({

    title: {
        type: String,
    },
    unity: {
        type: String,
    },
});


const Ingredient = mongoose.model('Ingredient', ingredientSchema);

function validateIngredient(ingredient) {

    const schema = {
        title: Joi.string().min(2).max(255).required(),
        unity: Joi.string().min(1).max(255).required(),
    };
    return Joi.validate(ingredient, schema);
}
exports.ingredientSchema = ingredientSchema;
exports.Ingredient = Ingredient;
exports.validate = validateIngredient;