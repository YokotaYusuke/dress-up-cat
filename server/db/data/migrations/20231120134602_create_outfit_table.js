exports.up = async (knex) => {
  await knex.schema.createTable('outfit', (table) => {
    table.increments('id').primary();
    table.date('create_date');
    table.string('outfit_name');
    table.string('room_url');
    table.string('cat_url');
    table.string('item_url');
    table.string('tops_url');
    table.string('bottoms_url');
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('outfit');
};
