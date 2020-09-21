const app = require('express')();
const consign = require('consign');
const db = require('./config/db');

const port = 3000;

app.db = db;

consign()
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(port, () => {
    console.log(`Backend started in port: ${port}`);
})