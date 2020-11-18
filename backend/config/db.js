const config = require('../knexfile.js');
const knex = require('knex')(config);

// Opção para deixar as migrates carregando automaticamente junto com a execução do sistema backend
// knex.migrate.latest([config]);

module.exports = knex;