function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('goodreads_user_id').notNullable();
    table.string('access_token').notNullable();
    table.string('access_token_secret').notNullable();
    table.timestamps(true, true);

    table.unique('goodreads_user_id');
    table.index('goodreads_user_id');
  });
}

function down(knex) {
  return knex.schema.dropTableIfExists('users');
}

module.exports = {
  up,
  down,
};
