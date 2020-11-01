import React from 'react';


class Start extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      courseId: 1
    }
  }

  onChange (e) {
    this.setState({ [e.target.name] : e.target.value});
 }



  createRound() {
    fetch('/rounds', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        courseId: this.state.courseId
      })
    })
    .then(res => res.json())
    .catch(err => console.log(err))
  }

  buttonClick() {
      this.props.viewSwitcher('scorecard')
      this.createRound.bind(this)
    }
  render() {
    return (

      <div>
      <input placeholder="First Name" type="text" name="firstName" onChange={this.onChange.bind(this)}></input>
      <input placeholder="Last Name" type="text" name="lastName" onChange={this.onChange.bind(this)}></input>
      <input placeholder="Course" type="number" name="courseId" onChange={this.onChange.bind(this)}></input>
      <button onClick={this.buttonClick.bind(this)}>Start Round</button>
      </div>
    )
  }
}

export default Start;