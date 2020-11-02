import React from 'react';
import Start from './Start.jsx';
import ScoreCard from './ScoreCard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCourse: '',
      currentScores : { },
      currentRound: {},
      view: "start",
      roundId: ""
    }
  }

  getCurrentRoundId(id) {
    this.setState({
      roundId: id
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
      1: this.state.currentRound.hole1Score ,
      2: this.state.currentRound.hole2Score ,
      3: this.state.currentRound.hole3Score ,
      4: this.state.currentRound.hole4Score ,
      5: this.state.currentRound.hole5Score ,
      6: this.state.currentRound.hole6Score ,
      7: this.state.currentRound.hole7Score ,
      8: this.state.currentRound.hole8Score ,
      9: this.state.currentRound.hole9Score ,
      10: this.state.currentRound.hole10Score ,
      11: this.state.currentRound.hole11Score ,
      12: this.state.currentRound.hole12Score ,
      13: this.state.currentRound.hole13Score ,
      14: this.state.currentRound.hole14Score ,
      15: this.state.currentRound.hole15Score ,
      16: this.state.currentRound.hole16Score ,
      17: this.state.currentRound.hole17Score ,
      18: this.state.currentRound.hole18Score
    }
  })
  }

  viewSwitcher(term) {
    this.setState({
      view: term
    })
  }

  // updateScores() {
  //   fetch('/rounds', {
  //     method: "PUT",
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     } ,
  //     body: {

  //     }
  //   })
  //   .then(res => res.json())
  //   .catch(err => console.log(err))
  // }

  renderView() {
    const view = this.state.view;
    if (view === 'start') {
      return <Start viewSwitcher={this.viewSwitcher.bind(this)}             getCurrentRound={this.getCurrentRound.bind(this)}
      getCurrentRoundId={this.getCurrentRoundId.bind(this)}/>
    } else if (view === 'scorecard') {
      return this.state.roundId !== "" ?
      <ScoreCard getCurrentRound={this.getCurrentRound.bind(this)} getCurrentScores={this.getCurrentScores.bind(this)}
      currentScores={Object.values(this.state.currentScores)} currentRound={this.state.currentRound}/> : null
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