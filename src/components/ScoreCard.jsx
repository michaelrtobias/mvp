import React from 'react';


class ScoreCard extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
   this.props.getCurrentRound()
  }


  render() {
    return (
      <div>scorecard rendered</div>
    )
  }
}

export default ScoreCard;