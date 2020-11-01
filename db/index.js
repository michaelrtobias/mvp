const {Client} = require('pg');
const {Sequelize} = require('sequelize')
const conString = "postgres://postgres:postgres@localhost:5432/scorecard";

const sequelize = new Sequelize(conString, {logging: false});
try {
  sequelize.authenticate();
  console.log('postgreSQL is connected!');
} catch (error) {
  throw err;
}


module.exports = sequelize;