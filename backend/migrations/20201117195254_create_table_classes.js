
exports.up = function(knex, Promisse) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary().increments()
        table.integer('subject').notNull()
        table.string('cost').notNull()
        table.integer('mentor_id').references('id')
            .inTable('mentors')                  
    })
};

exports.down = function(knex, Promisse) {
    return knex.schema.dropTable('classes');
};
