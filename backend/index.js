const express = require('express')();
const consign = require('consign');
const db = require('./config/db');

const port = 3000;

express.db = db;

consign()
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(express)

express.listen(port, () => {
    console.log(`Backend started in port: ${port}`);
})
