
exports.up = function(knex, Promise) {
  return knex.schema.createTable('toppings', (table) => {
  	table.increments().primary();
  	table.string('name').notNullable().unique();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('toppings');
};
