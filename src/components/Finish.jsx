import React from 'react';
import emailjs from 'emailjs-com';
import service from '../../emailconfig.js'
import template from '../../emailconfig.js'

class Finish extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      email: ""
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }



  sendEmail(e) {
    e.preventDefault();

    const parameters = {
      message_html: `${this.props.currentScores} ${this.props.currentScores.length > 0 ? this.props.currentScores.reduce((total, amount) => total + amount) : 0}`,
      golfer_email: this.state.email,
      to_name: this.props.currentRound.firstName
  }
    emailjs.sendForm('service_y5fn2ge', 'template_1xc3f0d', parameters, 'user_FoHdvOwYZKsNT6acCD4kS')
    .then(() => {console.log('Success: Email Sent')})
    .catch(err => (console.log(err)))
  }

  render() {
    const phrases = ['Nice Round','Gunga Galunga', 'Congratulations', 'May the Course Be With You', 'Un-FORE-gettable', 'Let\'s Par-Tee', 'Fairways and Greens']
    return (
<div>
    <div className="endPhrase">Un-FORE-gettable</div>
    <div>
      <h3>Enter your email below for your results to be sent to you!</h3>
      <form onSubmit={this.sendEmail.bind(this)}>
      <input type="email" placeholder="enter email here" name="email" onChange={this.handleChange.bind(this)} value={this.state.email}></input>
      <input type="submit" value ="Submit"  placeholder="SUBMIT"/>
      </form>
    </div>
    </div>

    )
  }
}

export default Finish;