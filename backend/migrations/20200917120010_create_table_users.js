
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull().unique()
        table.string('avatar')
        table.string('bio')
        table.string('whatsapp')
        table.string('password').notNull()
        table.boolean('mentor').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};