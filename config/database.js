const { Sequelize } = require('sequelize');

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
const host = process.env.DB_HOST;
const dialect = process.env.DB_DIALECT;

const db = new Sequelize(database, username, password, {
  host,
  dialect,
});

module.exports = db;