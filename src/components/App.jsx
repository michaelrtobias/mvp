import React from 'react';
import Start from './Start.jsx';
import ScoreCard from './ScoreCard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCourse: '',
      currentScores : {},
      currentRound: {},
      currentCourse: {},
      currentPars: [],
      view: "start",
      roundId: "",
      courseId: ""
    }
  }

  getCurrentRoundId(id) {
    this.setState({
      roundId: id
    })
  }

  getCurrentCourseId(id) {
    this.setState({
      courseId: id
    })
  }

  getCurrentRound() {
    var roundId = this.state.roundId
    fetch(`/rounds?id=${roundId}`)
    .then(res => res.json())
    .then((round) => {
      this.setState({
        currentRound: round[0]
      })
    })
    .then(() => {this.getCurrentScores()})
  }

  getCurrentScores() {
    this.setState({
      currentScores: {
      1: this.state.currentRound.hole1Score,
      2: this.state.currentRound.hole2Score,
      3: this.state.currentRound.hole3Score,
      4: this.state.currentRound.hole4Score,
      5: this.state.currentRound.hole5Score,
      6: this.state.currentRound.hole6Score,
      7: this.state.currentRound.hole7Score,
      8: this.state.currentRound.hole8Score,
      9: this.state.currentRound.hole9Score,
      10: this.state.currentRound.hole10Score,
      11: this.state.currentRound.hole11Score,
      12: this.state.currentRound.hole12Score,
      13: this.state.currentRound.hole13Score,
      14: this.state.currentRound.hole14Score,
      15: this.state.currentRound.hole15Score,
      16: this.state.currentRound.hole16Score,
      17: this.state.currentRound.hole17Score,
      18: this.state.currentRound.hole18Score
    }
  })
  }

  getCourseData() {
    var courseId = this.state.courseId;
    fetch(`/courses?id=${courseId}`)
    .then(res => res.json())
    .then((course) => {
      this.setState({
        currentCourse: course[0]
      })
    })
    .catch(err => console.log(err))
    .then(() => {this.getCurrentPars()})
  }

  getCurrentPars() {
      this.setState({
        currentPars: {
        1: this.state.currentCourse.hole1Par,
        2: this.state.currentCourse.hole2Par,
        3: this.state.currentCourse.hole3Par,
        4: this.state.currentCourse.hole4Par,
        5: this.state.currentCourse.hole5Par,
        6: this.state.currentCourse.hole6Par,
        7: this.state.currentCourse.hole7Par,
        8: this.state.currentCourse.hole8Par,
        9: this.state.currentCourse.hole9Par,
        10: this.state.currentCourse.hole10Par,
        11: this.state.currentCourse.hole11Par,
        12: this.state.currentCourse.hole12Par,
        13: this.state.currentCourse.hole13Par,
        14: this.state.currentCourse.hole14Par,
        15: this.state.currentCourse.hole15Par,
        16: this.state.currentCourse.hole16Par,
        17: this.state.currentCourse.hole17Par,
        18: this.state.currentCourse.hole18Par
      }
    })
  }

  viewSwitcher(term) {
    this.setState({
      view: term
    })
  }

  renderView() {
    const view = this.state.view;
    if (view === 'start') {
      return <Start viewSwitcher={this.viewSwitcher.bind(this)}             getCurrentRound={this.getCurrentRound.bind(this)}
      getCurrentRoundId={this.getCurrentRoundId.bind(this)}
      getCurrentCourseId={this.getCurrentCourseId.bind(this)}/>
    } else if (view === 'scorecard') {
      return this.state.roundId !== "" ?
      <ScoreCard
        getCurrentRound={this.getCurrentRound.bind(this)} getCurrentScores={this.getCurrentScores.bind(this)}
        currentScores={Object.values(this.state.currentScores)} currentRound={this.state.currentRound}
        roundId={this.state.roundId}
        getCourseData={this.getCourseData.bind(this)}
        currentPars={this.state.currentPars}
      /> : null
    }
  }

  render() {
    return(
      <div className="main">
      <div className="switcher">
        {this.renderView()}
      </div>
      </div>
    )
  }
}

export default App;