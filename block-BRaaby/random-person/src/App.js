import React, { Component } from 'react'
import Loader from './Loader'

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      data: null,
      title: '',
      titleValue: '',
      value: '',
    }
  }

  handleChange = (value) => {
    var fullName =
      this.state.data.name.title +
      ' ' +
      this.state.data.name.first +
      ' ' +
      this.state.data.name.last;
    if (value === 'data') {
      this.setState({
        title: 'My Name is ',
        titleValue: fullName,
      });
    } else if (value === 'email') {
      this.setState({
        title: 'My Email is',
        titleValue: this.state.data.email,
      });
    } else if (value === 'dob') {
      this.setState({
        title: 'My DOB is',
        titleValue: this.state.data.dob.date,
        value: 'Age : ' + this.state.data.dob.age,
      });
    } else if (value === 'location') {
      this.setState({
        title: 'My Address is',
        titleValue:
          this.state.data.location.street.number +
          this.state.data.location.street.name,
        value:
          this.state.data.location.city +
          ', ' +
          this.state.data.location.state +
          ', ' +
          this.state.data.location.country +
          ' - ' +
          this.state.data.location.postcode,
      });
    } else if (value === 'contact') {
      this.setState({
        title: 'My Contact Number is',
        titleValue: 'Phone : ' + this.state.data.phone,
        value: 'Cell' + this.state.data.cell,
      });
    }
  };


  componentDidMount = () => {
    fetch('https://randomdata.me/api/')
    .then((response) => response.json())
    .then(data =>this.setState({ user: data.results[0]}))
  }
  changeHover = () => {
    this.componentDidMount();
  };

  render() {
    if(!this.state.data) {
      return <Loader />
    }
    return (
      <div>
        <article className="profile">
            <div className="profile_content">
              <img src={this.state.data.picture.large} alt="random data card" />
              <p>
                {this.state.title ||
                  this.state.data.name.first + ' ' + this.state.data.name.last}
              </p>
              <p>{this.state.titleValue || this.state.data.titleValue}</p>
              <p>{this.state.value}</p>
            </div>
            <div className="icons">
              <img
                alt="data"
                src="./images/data.png"
                onClick={() => this.handleChange('data')}
              />
              <img
                alt="envelope"
                src="./images/envelope.png"
                onClick={() => this.handleChange('email')}
              />
              <img
                alt="calender"
                src="./images/schedule.png"
                onClick={() => this.handleChange('dob')}
              />
              <img
                alt="location"
                src="./images/your-location.png"
                onClick={() => this.handleChange('location')}
              />
              <img
                alt="data"
                src="./images/phone-call.png"
                onClick={() => this.handleChange('contact')}
              />
            </div>
            <button className="btn-primary" onMouseOver={this.changeHover}>
              click
            </button>
          </article>

      </div>
    )
  }
}

export default App