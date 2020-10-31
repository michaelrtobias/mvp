const { Sequelize, DataTypes } = require('sequelize');
const db = require('../index.js');
const Course = require('./courseModel.js')

const Round = db.define('rounds', {
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
  totalRoundScore: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole1Score: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole2Score: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole3Score: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole4Score: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole5Score: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole6Score: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole7Score: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole8Score: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole9Score: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole10Score: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole11Score: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole12Score: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole13Score: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole14Score: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole15Score: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole16Score: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole17Score: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hole18Score: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
})

// Round.belongsTo(Course, { foreignKey: 'courseId'});

Round.sync()

module.exports = Round;