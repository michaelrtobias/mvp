import React from 'react';

class ScoreBox extends React.Component {
  constructor(props) {
    super(props)
  }




  render() {
    return (
      <input className="score-box"placeholder={this.props.score} type="number" name="holeScore"></input>
    )
  }
}

export default ScoreBox;