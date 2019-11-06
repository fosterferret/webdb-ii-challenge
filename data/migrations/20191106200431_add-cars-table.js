exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl.text("VIN", 20).notNullable();
    tbl.text("make", 128).notNullable();
    tbl.text("model", 128).notNullable();
    tbl.text("mileage").notNullable();
    tbl.text("transmissionType");
    tbl.text("statusOfTitle");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
