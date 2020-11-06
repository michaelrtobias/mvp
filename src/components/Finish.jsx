import React from 'react';


class Finish extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
   this.props.viewSwitcher('start')
  }

  render() {
    const phrases = ['Nice Round','Gunga Galunga', 'Congratulations', 'May the Course Be With You', 'Un-FORE-gettable', 'Let\'s Par-Tee', 'Fairways and Greens']
    return (
    <div>
    <div className="endPhrase">{phrases[Math.floor(Math.random() * phrases.length)]}</div>
    <img src="https://i.pinimg.com/originals/95/7b/05/957b055eb087ee5aa8c058b00a1b2a8e.gif"></img>
    <h3>Got another couple holes in you? Click below to start a new round</h3>
    <button className="returnBTN" onClick={this.handleClick.bind(this)}>Start New Round</button>
    </div>

    )
  }
}

export default Finish;