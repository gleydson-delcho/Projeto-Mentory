
exports.up = function(knex, Promisse) {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary().increments()
        table.integer('weekday').notNull()
        table.integer('time_from').notNull()
        table.integer('time_to').notNull()
        table.integer('class_id').references('id')
            .inTable('class_schedule')                  
    })
};

exports.down = function(knex, Promisse) {
    return knex.schema.dropTable('class_schedule');
};