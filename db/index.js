const {Client} = require('pg');
const {Sequelize} = require('sequelize')
const conString = "postgres://postgres:postgres@process.env.DATABASE_url/scorecard";

const sequelize = new Sequelize(conString, {logging: false});
try {
  sequelize.authenticate();
  console.log('postgreSQL is connected!');
} catch (error) {
  throw err;
}


module.exports = sequelize;