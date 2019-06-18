const express = require('express')

const knex = require('knex');

const config = {
  client: 'sqlite3',
  connection: {
    filename: './data/lambda.db3'
  },
  useNullAsDefault: true
}

const db = knex(config);

module.exports = router;
