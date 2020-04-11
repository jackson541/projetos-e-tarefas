
exports.up = function(knex) {
  return knex.schema.createTable('tasks', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tasks')
};
