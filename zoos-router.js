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
/*
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
*/


module.exports = router;
