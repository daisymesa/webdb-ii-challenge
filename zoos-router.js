const express = require('express');

const zoos = require('./zoos-model');

const router = require('express').Router();

const knex = require('knex');

const config = {
    client: 'sqlite3',
    connection: {
        filename: './data/rolex.db3'
    },
    useNullAsDefault: true
}

const db = knex(config);

//READ
router.get("/", (req, res) => {
    db('zoos')
        .then(zoos => res.status(200).json(zoos))
        .catch(error => res.status(500).json({ error: error }));
});

router.get("/:id", (req, res) => {
    const zooId = req.params.id;
    db('zoos')
        .where({ id: zooId })
        .then(zooInfo => res.status(200).json(zooInfo))
        .catch(error => res.status(500).json({ error: error }));
});

// UPDATE
router.post('/', (req, res) => {
    const zoo = req.body;
    const { name } = req.body;
    if (name) {
        db('zoos')
            .insert(req.body)
            .then(data => {
                res.status(201).json(data)
            })
            .catch(error => {
                res.status(500).json({ error: error })
            })
    } else {
        res.status(400).json({ error: 'Zoo name is invalid' })
    }
})

// CREATE
router.put('/:id', (req, res) => {
    const changes = req.body;
    const id = req.params.id;
    db('zoos')
    .where({ id: id })
    .update(changes)
    .then(count => {
        if(count) {
            res.status(200).json({ count })
        } else {
            res.status(404).json({ error: 'Zoo ID not found'})
        }
    })
    .catch(error => {
        res.status(500).json({ error: error })
    })
})


module.exports = router;
