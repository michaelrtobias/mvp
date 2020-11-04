import React from 'react';
import ScoreBox from './ScoreBox.jsx'
import Par from './Pars.jsx'

class ScoreCard extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      hole1: 0,
      hole2: 0,
      hole3: 0,
      hole4: 0,
      hole5: 0,
      hole6: 0,
      hole7: 0,
      hole8: 0,
      hole9: 0,
      hole10: 0,
      hole11: 0,
      hole12: 0,
      hole13: 0,
      hole14: 0,
      hole15: 0,
      hole16: 0,
      hole17: 0,
      hole18: 0,
      totalScore: 0
    }
  }

  mergeScores() {
    this.setState({
      hole1: this.props.currentScores[0],
      hole2: this.props.currentScores[1],
      hole3: this.props.currentScores[2],
      hole4: this.props.currentScores[3],
      hole5: this.props.currentScores[4],
      hole6: this.props.currentScores[5],
      hole7: this.props.currentScores[6],
      hole8: this.props.currentScores[7],
      hole9: this.props.currentScores[8],
      hole10: this.props.currentScores[9],
      hole11: this.props.currentScores[10],
      hole12: this.props.currentScores[11],
      hole13: this.props.currentScores[12],
      hole14: this.props.currentScores[13],
      hole15: this.props.currentScores[14],
      hole16: this.props.currentScores[15],
      hole17: this.props.currentScores[16],
      hole18: this.props.currentScores[17]
    })
  }

  componentDidMount() {
   this.props.getCurrentRound()
   this.props.getCourseData()
  }

  scoreChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  tallyScore(array) {

    this.setState({
      totalScore: this.props.currentScores.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      }, 0)
    })
  }

  finishClick() {
    this.props.viewSwitcher('finish')
  }

  updateScores() {
    var roundId = this.props.roundId
    fetch(`/rounds?id=${roundId}`, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      } ,
      body: JSON.stringify({
    hole1Score: this.state.hole1 ,
    hole2Score: this.state.hole2 ,
    hole3Score: this.state.hole3 ,
    hole4Score: this.state.hole4 ,
    hole5Score: this.state.hole5 ,
    hole6Score: this.state.hole6 ,
    hole7Score: this.state.hole7 ,
    hole8Score: this.state.hole8 ,
    hole9Score: this.state.hole9 ,
    hole10Score: this.state.hole10 ,
    hole11Score: this.state.hole11 ,
    hole12Score: this.state.hole12 ,
    hole13Score: this.state.hole13 ,
    hole14Score: this.state.hole14 ,
    hole15Score: this.state.hole15 ,
    hole16Score: this.state.hole16 ,
    hole17Score: this.state.hole17 ,
    hole18Score: this.state.hole18
      })
    })
    .then(res => res.json())
    .catch(err => console.log(err))
    .then(() => {this.props.getCurrentRound()})
  }

  buttonClick() {
    this.updateScores()
    this.tallyScore(this.props.currentScores)
  }

  render() {
    return (

   <div className="scoreCard">

    <div className="nameBox">{this.props.currentCourse.courseName}</div>
    <div className="nameBox">{this.props.currentRound.firstName} {this.props.currentRound.lastName}</div>
    <div className="parBoxes">
    {/* <div className="holeNumber">Hole</div> */}
      <div className="holeNumber">1</div>
      <div className="holeNumber">2</div>
      <div className="holeNumber">3</div>
      <div className="holeNumber">4</div>
      <div className="holeNumber">5</div>
      <div className="holeNumber">6</div>
      <div className="holeNumber">7</div>
      <div className="holeNumber">8</div>
      <div className="holeNumber">9</div>
      <div className="holeNumber">10</div>
      <div className="holeNumber">11</div>
      <div className="holeNumber">12</div>
      <div className="holeNumber">13</div>
      <div className="holeNumber">14</div>
      <div className="holeNumber">15</div>
      <div className="holeNumber">16</div>
      <div className="holeNumber">17</div>
      <div className="holeNumber">18</div>
      <div className="holeNumber">Total</div>
    </div>
    <div className="parBoxes">
      {Object.values(this.props.currentPars).map((par) => <Par par={par}/>)}
    </div>
    <div className="scores">

      <input className="score-box"
             placeholder={this.props.currentScores[0]}
             onChange={this.scoreChange.bind(this)}
             type="number"
             size="3"
             name="hole1"></input>
      <input className="score-box"
             placeholder={this.props.currentScores[1]}
             onChange={this.scoreChange.bind(this)}
             type="number"
             size="3"
             name="hole2"></input>
      <input className="score-box"
             placeholder={this.props.currentScores[2]}
             onChange={this.scoreChange.bind(this)}
             type="number"
             size="3"
             name="hole3"></input>
      <input className="score-box"
             placeholder={this.props.currentScores[3]}
             onChange={this.scoreChange.bind(this)}
             type="number"
             size="3"
             name="hole4"></input>
      <input className="score-box"
             placeholder={this.props.currentScores[4]}
             onChange={this.scoreChange.bind(this)}
             type="number"
             size="3"
             name="hole5"></input>
      <input className="score-box"
             placeholder={this.props.currentScores[5]}
             onChange={this.scoreChange.bind(this)}
             type="number"
             size="3"
             name="hole6"></input>
      <input className="score-box"
             placeholder={this.props.currentScores[6]}
             onChange={this.scoreChange.bind(this)}
             type="number"
             size="3"
             name="hole7"></input>
      <input className="score-box"
             placeholder={this.props.currentScores[7]}
             onChange={this.scoreChange.bind(this)}
             type="number"
             size="3"
             name="hole8"></input>
      <input className="score-box"
             placeholder={this.props.currentScores[8]}
             onChange={this.scoreChange.bind(this)}
             type="number"
             size="3"
             name="hole9"></input>
      <input className="score-box"
             placeholder={this.props.currentScores[9]}
             onChange={this.scoreChange.bind(this)}
             type="number"
             size="3"
             name="hole10"></input>
      <input className="score-box"
             placeholder={this.props.currentScores[10]}
             onChange={this.scoreChange.bind(this)}
             type="number"
             size="3"
             name="hole11"></input>
      <input className="score-box"
             placeholder={this.props.currentScores[11]}
             onChange={this.scoreChange.bind(this)}
             type="number"
             size="3"
             name="hole12"></input>
      <input className="score-box"
             placeholder={this.props.currentScores[12]}
             onChange={this.scoreChange.bind(this)}
             type="number"
             size="3"
             name="hole13"></input>
      <input className="score-box"
             placeholder={this.props.currentScores[13]}
             onChange={this.scoreChange.bind(this)}
             type="number"
             size="3"
             name="hole14"></input>
      <input className="score-box"
             placeholder={this.props.currentScores[14]}
             onChange={this.scoreChange.bind(this)}
             type="number"
             size="3"
             name="hole15"></input>
      <input className="score-box"
             placeholder={this.props.currentScores[15]}
             onChange={this.scoreChange.bind(this)}
             type="number"
             size="3"
             name="hole16"></input>
      <input className="score-box"
             placeholder={this.props.currentScores[16]}
             onChange={this.scoreChange.bind(this)}
             type="number"
             size="3"
             name="hole17"></input>
      <input className="score-box"
             placeholder={this.props.currentScores[17]}
             onChange={this.scoreChange.bind(this)}
             type="number"
             size="3"
             name="hole18"></input>
             <div className="total">{this.props.currentScores.length > 0 ? this.props.currentScores.reduce((total, amount) => total + amount) : 0}</div>
    </div>

    <div>
      <button onClick={this.buttonClick.bind(this)} >Update Scores</button>
      <button onClick={this.finishClick.bind(this)}>Finish Round</button>
    </div>
  </div>
    )
  }
}

export default ScoreCard;
