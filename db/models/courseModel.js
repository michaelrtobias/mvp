const { Sequelize, DataTypes } = require('sequelize');
const db = require('../index.js');

const Course = db.define('courses', {
  courseName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  hole1Par: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole2Par: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole3Par: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole4Par: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole5Par: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole6Par: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole7Par: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole8Par: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole9Par: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole10Par: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole11Par: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole12Par: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole13Par: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole14Par: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole15Par: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole16Par: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole17Par: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole18Par: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
})



Course.sync()

module.exports = Course;


