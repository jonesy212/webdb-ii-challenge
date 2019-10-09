exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          id: 1,
          VIN: "rowValue1",
          make: "Honda",
          model: "Civic",
          mileage: "2233222",
          transmission: "automatic",
          title: "clear"
        }
      ]);
    });
};
