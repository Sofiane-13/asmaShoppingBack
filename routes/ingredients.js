const {
    Ingredient,
    validate
} = require('../models/ingredients');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.get('/', (async (req, res) => {
    const ingredient = await Ingredient.find();
    res.send(ingredient);
}));

router.get('/:id', (async (req, res) => {
    const ingredient = await Ingredient.findById(req.params.id);

    if (!ingredient) return res.status(404).send('The ingredient with the given ID was not found.');

    res.send(ingredient);
}));

router.delete('/:id', (async (req, res) => {
    const ingredient = await Ingredient.findByIdAndRemove(req.params.id);

    if (!ingredient) return res.status(404).send('The movie with the given ID was not found.');

    res.send(ingredient);
}));

router.post('/', (async (req, res) => {

    const {
        error
    } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const ingredient = new Ingredient({
        title: req.body.title,
        unity: req.body.unity
    });

    await ingredient.save();

    res.send(Ingredient);
}));

router.put('/:id', (async (req, res) => {

    const ingredient = await Ingredient.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        unity: req.body.unity
    }, {
        new: true
    });

    if (!ingredient) return res.status(404).send('The ingredient with the given ID was not found.');

    res.send(ingredient);
}));

module.exports = router;