
exports.up = function(knex) {
    return knex.schema.createTable('brighton_activities', table => {
          table.increments();
          table.string('activityTitle').notNullable();
          table.string('activityType').notNullable();
          table.integer('activityPrice').notNullable();
          table.integer('activityRating').notNullable();
      })
    };

    exports.down = function(knex, Promise) {
        return knex.schema.dropTableIfExists('brighton_activities')
        };