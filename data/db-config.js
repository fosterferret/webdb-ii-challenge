const knex = require("knex");
const config = require("../knexfile");
// eslint-disable-next-line no-undef
module.exports = knex(config[process.env.NODE_ENV]);
