import React from 'react';


class Finish extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    const phrases = ['Nice Round','Gunga Galunga', 'Congratulations', 'May the Course Be With You', 'Un-FORE-gettable', 'Let\'s Par-Tee', 'Fairways and Greens']
    return (
    <div>
    <div className="endPhrase">{phrases[Math.floor(Math.random() * phrases.length)]}</div>
    <h3>Got another couple holes in you? Click below to start a new round</h3>
    </div>
    )
  }
}

export default Finish;