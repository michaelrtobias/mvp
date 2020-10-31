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
// sequelize.authenticate((err) => {
//   if (err) {
//     throw err
//   } else {
//     console.log('postgreSQL is connected!')
//   }
// })

module.exports = sequelize;