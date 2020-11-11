const { Sequelize, DataTypes } = require('sequelize');
const db = require('../index.js');
const Course = require('./courseModel.js')

const Putts = db.define('Putts', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  courseId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  totalPutts: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole1Putts: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole2Putts: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole3Putts: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole4Putts: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole5Putts: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole6Putts: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole7Putts: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole8Putts: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole9Putts: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole10Putts: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole11Putts: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole12Putts: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole13Putts: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole14Putts: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole15Putts: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole16Putts: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole17Putts: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole18Putts: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
})

// Putt.belongsTo(Course, { foreignKey: 'courseId'});

Putt.sync()

module.exports = Putt;