const { Sequelize, DataTypes } = require('sequelize');
const db = require('../index.js');

const Course = db.define('courses', {
  courseName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  totalpar: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 72
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


// {
//   "id": 1,
//   "courseName": "TPC Scottsdale",
//   "hole1Par": 4,
//   "hole2Par": 4,
//   "hole3Par": 5,
//   "hole4Par": 3,
//   "hole5Par": 4,
//   "hole6Par": 4,
//   "hole7Par": 3,
//   "hole8Par": 4,
//   "hole9Par": 4,
//   "hole10Par": 4,
//   "hole11Par": 4,
//   "hole12Par": 3,
//   "hole13Par": 5,
//   "hole14Par": 4,
//   "hole15Par": 5,
//   "hole16Par": 3,
//   "hole17Par": 4,
//   "hole18Par": 4,
//   "createdAt": "2020-10-31T21:53:13.487Z",
//   "updatedAt": "2020-10-31T21:53:13.487Z"
// }
