       exports.up = function(knex, Promise) {
        return knex.schema.createTable('mentors', table => {
            table.increments('id').primary().increments()
            table.string('name').notNull()
            table.string('email').notNull().unique()
            table.string('avatar', 1000)
            table.string('bio', 1000)
            table.string('whatsapp')           
        })
    };
    
    exports.down = function(knex, Promise) {
        return knex.schema.dropTable('mentors');
    };  



