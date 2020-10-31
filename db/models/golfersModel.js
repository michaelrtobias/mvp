const { Sequelize, DataTypes } = require('sequelize');
const db = require('../index.js');


const Golfer = db.define('Golfer', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Golfer;