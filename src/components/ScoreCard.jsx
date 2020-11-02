import React from 'react';
import ScoreBox from './ScoreBox.jsx'

class ScoreCard extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
   this.props.getCurrentRound()
  }



  render() {
    return (
   <div>
     <div>
      <div>Golfer Name: {this.props.currentRound.firstName} {this.props.currentRound.lastName}</div>
    </div>
      <div className="scores">
      {this.props.currentScores.map((score) => <ScoreBox score={score}/>)}
      </div>
      <button>Update Scores</button>
    </div>
    )
  }
}

export default ScoreCard;