const express = require('express');

const Zoos = require('./zoos-model');

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

module.exports = router;
