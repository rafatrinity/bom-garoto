exports.up = function(knex) {
  return knex.schema.createTable("users", function(table) {
    table.string("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table.string("cel").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
