const {
    Receipt,
    validate
} = require('../models/receipts');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.get('/', (async (req, res) => {
    const receipt = await Receipt.find();
    res.send(receipt);
}));

router.get('/:id', (async (req, res) => {
    const receipt = await Receipt.findById(req.params.id);

    if (!receipt) return res.status(404).send('The receipt with the given ID was not found.');

    res.send(receipt);
}));

router.delete('/:id', (async (req, res) => {
    const receipt = await Receipt.findByIdAndRemove(req.params.id);

    if (!receipt) return res.status(404).send('The movie with the given ID was not found.');

    res.send(receipt);
}));

router.post('/', (async (req, res) => {
    console.log(req.body);
    const {
        error
    } = validate(req.body);
    console.log(error);
    if (error) return res.status(400).send(error.details[0].message);

    const receipt = new Receipt({
        title: req.body.title,
        genre: req.body.genre,
        preparation: req.body.preparation,
        cookingTime: req.body.cookingTime,
        personNum: req.body.personNum,
        liked: req.body.liked,
        ingredients: req.body.ingredients
    });

    await receipt.save();

    res.send(receipt);
}));

router.put('/:id', (async (req, res) => {

    const receipt = await Receipt.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        genre: req.body.genre,
        preparation: req.body.preparation,
        cookingTime: req.body.cookingTime,
        personNum: req.body.personNum,
        ingredients: req.body.ingredients,
        liked: req.body.liked
    }, {
        new: true
    });

    if (!receipt) return res.status(404).send('The receipt with the given ID was not found.');

    res.send(receipt);
}));

router.put('/', (async (req, res) => {

    const receipt = await Receipt.updateMany({
        liked: false
    });

    if (!receipt) return res.status(404).send('The receipt with the given ID was not found.');

    res.send(receipt);
}));

module.exports = router;