const express = require('express');
const app = express();
const port = 8000;
const db = require('../db/index.js');
const bodyParser = require('body-parser');
const path = require('path');
const Course = require('../db/models/courseModel.js');
const Round = require('../db/models/roundModel.js');
const dotenv = require('dotenv').config();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public')))



app.get('/', (req, res) => {
  res.send('GUNGAGALUNGA');
})

app.get('/courses', (req, res) => {
  const courseId = [req.query.id]
  Course.findAll(
    {
      where: {
        id: courseId
      }
    }
  )
  .then((course) => res.json(course))
  .then(() => console.log('Course Recieved'))
  .catch(err => console.log(err))

})

app.post('/courses', (req, res) => {
  Course.create({
    courseName: req.body.courseName,
    totalPar: req.body.totalPar,
    hole1Par: req.body.hole1Par,
    hole2Par: req.body.hole2Par,
    hole3Par: req.body.hole3Par,
    hole4Par: req.body.hole4Par,
    hole5Par: req.body.hole5Par,
    hole6Par: req.body.hole6Par,
    hole7Par: req.body.hole7Par,
    hole8Par: req.body.hole8Par,
    hole9Par: req.body.hole9Par,
    hole10Par: req.body.hole10Par,
    hole11Par: req.body.hole11Par,
    hole12Par: req.body.hole12Par,
    hole13Par: req.body.hole13Par,
    hole14Par: req.body.hole14Par,
    hole15Par: req.body.hole15Par,
    hole16Par: req.body.hole16Par,
    hole17Par: req.body.hole17Par,
    hole18Par: req.body.hole18Par
  })
  .then(result => res.json(result))
  .catch(err => console.log(err))
  .then(() => console.log('Course Created'))
})

app.get(`/rounds`, (req, res) => {
  const roundId = [req.query.id]
  Round.findAll(
    {
    where: {
      id: roundId
    }
  }
  )
  .then((round) => res.json(round))
  .then(() => console.log('Round Recieved'))
  .catch(err => console.log(err))
})

app.post('/rounds', (req, res) => {
  Round.create({
  firstName: req.body.firstName,
  lastName: req.body.lastName,
  courseId: req.body.courseId
})
  .then((round) => res.json(round))
  .then(() => console.log('Round Created'))
  .catch(err => console.log(err))

})

app.put('/rounds', (req, res) => {
  const roundId = [req.query.id]
  Round.update({
    hole1Score: req.body.hole1Score,
    hole2Score: req.body.hole2Score,
    hole3Score: req.body.hole3Score,
    hole4Score: req.body.hole4Score,
    hole5Score: req.body.hole5Score,
    hole6Score: req.body.hole6Score,
    hole7Score: req.body.hole7Score,
    hole8Score: req.body.hole8Score,
    hole9Score: req.body.hole9Score,
    hole10Score: req.body.hole10Score,
    hole11Score: req.body.hole11Score,
    hole12Score: req.body.hole12Score,
    hole13Score: req.body.hole13Score,
    hole14Score: req.body.hole14Score,
    hole15Score: req.body.hole15Score,
    hole16Score: req.body.hole16Score,
    hole17Score: req.body.hole17Score,
    hole18Score: req.body.hole18Score
  }, {
    where: {
      id: roundId
    }
  })
  .then((round) => res.json(round))
  .then(() => console.log('Round Updated'))
  .catch(err => console.log(err))
})


app.listen(process.env.PORT, () => {
  console.log(`Connected! Listening on port: ${process.env.PORT}`)
})