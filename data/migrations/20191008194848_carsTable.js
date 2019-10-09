
  exports.up = function(knex){
      return knex.schema.createTable('cars', tbl => {

          tbl.increments();
          tbl.text('VIN', 17).unique().notNullable()
          tbl.text('make', 10)
          tbl.text('model', 25)
          tbl.text('mileage', 8)
          tbl.text('transmission', 9)
          tbl.text('title', 10);

      })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cars');

}
