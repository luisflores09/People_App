///////////////////////////////
// DEPENDENCIES
////////////////////////////////
// import express
const express = require('express');
// import Express Router
const router = express.Router();
// import People Model
const People = require('../models/people');

///////////////////////////////
// ROUTES
////////////////////////////////

// People index route
router.get('/', async (req, res) => {
    try {
        res.json(await People.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});

// People delete route
router.delete('/:id', async (req, res) => {
    try {
        res.json(await People.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

// People update route
router.put('/:id', async (req, res) => {
    try {
        res.json(
            await People.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        res.status(400).json(error);
    }
});

// People create route
router.post('/', async (req, res) => {
    try {
        res.json(await People.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});


module.exports = router;