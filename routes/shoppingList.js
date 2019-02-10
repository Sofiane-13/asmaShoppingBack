const {
    List,
    validate
} = require('../models/shoppingList');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.get('/', (async (req, res) => {
    const list = await List.find();
    res.send(list);
}));

router.get('/:id', (async (req, res) => {
    const list = await List.findById(req.params.id);

    if (!list) return res.status(404).send('The list with the given ID was not found.');

    res.send(list);
}));

router.delete('/:id', (async (req, res) => {
    const list = await List.findByIdAndRemove(req.params.id);

    if (!list) return res.status(404).send('The movie with the given ID was not found.');

    res.send(list);
}));

router.post('/', (async (req, res) => {
    console.log(req.body);
    const {
        error
    } = validate(req.body);
    console.log(error);
    if (error) return res.status(400).send(error.details[0].message);

    const list = new List({
        title: req.body.title,
        quantity: req.body.quantity,
    });

    await list.save();

    res.send(list);
}));

router.put('/:id', (async (req, res) => {

    const list = await List.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        quantity: req.body.quantity,
    }, {
        new: true
    });

    if (!list) return res.status(404).send('The list with the given ID was not found.');

    res.send(list);
}));

module.exports = router;