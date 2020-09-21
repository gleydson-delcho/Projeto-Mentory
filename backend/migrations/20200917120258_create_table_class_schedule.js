// knex migrate:latest
exports.up = function(knex, Promisse) {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary()
        table.integer('weekday').notNull()
        table.integer('time_from').notNull()
        table.integer('time_to').notNull()
        table.integer('class_id').references()
            .inTable('classes').notNull()
    })
};

// knex migrate:rollback
exports.down = function(knex, Promisse) {
    return knex.schema.dropTable('class_schedule');
};
