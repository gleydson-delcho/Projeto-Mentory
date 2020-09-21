// Update with your config settings.

module.exports = {
  
    client: 'postgresql',
    connection: {
      database: 'mentory',
      user:     'postgres',
      password: 'panico'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
