
exports.up = function(knex, Promisse) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary()
        table.integer('subject').notNull()
        table.string('cost').notNull()
        table.integer('user_id').references('id')
            .inTable('users').notNull()
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('classes');
};
