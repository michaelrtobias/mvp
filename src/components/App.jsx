import React from 'react';
import Start from './Start.jsx';
import ScoreCard from './ScoreCard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentRound : {},
      view: "start",
      currentScores: []
    }
  }


  getCurrentRound() {
    fetch('/rounds')
    .then(res => res.json())
    .then((round) => {
      this.setState({
        currentRound: round[round.length - 1]
      })
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
      return <Start viewSwitcher={this.viewSwitcher.bind(this)} getCurrentRound={this.getCurrentRound.bind(this)}/>
    } else if (view === 'scorecard') {
      return <ScoreCard getCurrentRound={this.getCurrentRound.bind(this)}/>
    }
  }

  render() {
    return(
      <div>
      <div className="switcher">
        {this.renderView()}
      </div>
      </div>
    )
  }
}

export default App;