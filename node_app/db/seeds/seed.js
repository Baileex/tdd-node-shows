const { schemaData } = require("../data");
exports.seed = function (knex) {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      return knex("schemas").insert(schemaData).returning("*");
    });
};
