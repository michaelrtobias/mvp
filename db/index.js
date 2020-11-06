const {Client} = require('pg');
const {Sequelize} = require('sequelize')
const conString = process.env.DATABASE_URL;

const sequelize = new Sequelize({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
  logging: false}
  );
try {
  sequelize.authenticate();
  console.log('postgreSQL is connected!');
} catch (error) {
  throw err;
}


module.exports = sequelize;