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
      {props.currentScores.map((score) => <ScoreBox score={score}/>)}
      </div>
    )
  }
}

export default ScoreCard;