const Course = require('../models/courseModel.js');


module.exports = {

  create: () => {
    Course.create({
      courseName: req.body.courseName,
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
  },

  getCourse: () => {

  }

}