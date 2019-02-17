const mongoose = require('mongoose');
const Joi = require('joi');

const ingeredientsSchema = new mongoose.Schema({
    title: {
        type: String
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

const genresShema = new mongoose.Schema({
    title: {
        type: String,
    },
    genreId: {
        type: String,
    }
});

const receiptSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    preparation: {
        type: String
    },
    cookingTime: {
        type: Number
    },
    personNum: {
        type: Number
    },
    liked: {
        type: Boolean
    },
    genre: genresShema,
    ingredients: [ingeredientsSchema]
});


const Receipt = mongoose.model('Receipt', receiptSchema);

function validateReceipt(receipt) {
    const ingredientShema = Joi.object({
        title: Joi.string().min(2).max(255).required(),
        quantity: Joi.number().min(0).max(5000),
        unity: Joi.string(),
        idIngredient: Joi.string().min(2).max(255).required(),
    });
    const genreShema = Joi.object({
        title: Joi.string().min(2).max(255).required(),
        genreId: Joi.string().min(2).max(255).required(),

    });
    const schema = {
        title: Joi.string().min(2).max(255).required(),
        preparation: Joi.string().min(0).max(2000).required(),
        cookingTime: Joi.number().min(0).max(255),
        personNum: Joi.number().min(0).max(500),
        liked: Joi.boolean(),
        genre: genreShema,
        ingredients: Joi.array().items(ingredientShema)
    };
    return Joi.validate(receipt, schema);
}
exports.receiptSchema = receiptSchema;
exports.Receipt = Receipt;
exports.validate = validateReceipt;