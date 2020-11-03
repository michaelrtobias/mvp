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
    .then((round) => {
      this.props.getCurrentRoundId(round.id)
    })
  }

  buttonClick(e) {
    e.preventDefault();
      this.createRound()
      this.props.viewSwitcher('scorecard')
      this.props.getCurrentCourseId(this.state.courseId)
    }
  render() {
    return (
      <div>
        <div className="startTitle">
          GUNGAGALUNGA
        </div>
          <div>
            <input placeholder="First Name" type="text" name="firstName" onChange={this.onChange.bind(this)} required></input>
            <input placeholder="Last Name" type="text" name="lastName" onChange={this.onChange.bind(this)} required></input>
            <select placeholder="Course" type="number" name="courseId" onChange={this.onChange.bind(this)} required>
            <option value="" disabled>Select a course</option>
              <option value="1">TPC Scottsdale</option>
              <option value="2">Torrey Pines</option>
            </select>
          </div>
          <div >
            <button className="startBTN" onClick={this.buttonClick.bind(this)}>Start Round</button>
          </div>
      </div>
    )
  }
}

export default Start;