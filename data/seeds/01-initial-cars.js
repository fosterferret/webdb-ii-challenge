exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: "74747484DD8493DD",
          make: "Ford",
          model: "Ranger",
          mileage: "20000"
        },
        {
          VIN: "73763636377373GH",
          make: "Mercedez Benz",
          model: "F5",
          mileage: "9000"
        }
      ]);
    });
};
