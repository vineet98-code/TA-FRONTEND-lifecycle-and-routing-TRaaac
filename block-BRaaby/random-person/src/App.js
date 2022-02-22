import React, { Component, Fragment } from 'react'
import Button from './Button'
import Loader from './Loader'

 class App extends Component {
  constructor(props) {
    super()
    this.state = {
      userData: null,
      activeUser: false,
      activeLink: 0,
      error: null,
      new: false,
      icons: [
        'fas fa-user fa-2x',
        'fas fa-envelope fa-2x',
        'fas fa-calendar-alt fa-2x',
        'fas fa-map-marker fa-2x',
        'fas fa-phone fa-2x',
        'fas fa-lock fa-2x',
      ],
      style: {
        color: "green"
      }
    }
  }
  
//   PhaseGenerator = (user) => {
//   const phrases = [
//       `Hi my name is ${user.firstName} ${user.lastName}`,
//       `My email address is ${user.email}`,
//       `I was born on ${user.dob.date.slice(0, 10)}`,
//       `My country is ${user.location.country}`,
//       `My Phone number ${user.phone}`,
//       `My password is ${user.login.password}`
//   ]
//   return (
//       <h1>{phrases[this.state.activeLink]}</h1>
//   )
// }
  
  componentDidMount() {
    //  console.log('button is working')
    fetch("https://randomuser.me/api/")
      .then((response) => {
        // console.log(response);
        if (response.status !== 200) {
          throw new Error('Something went wrong')
        }
        return response.json()
      })
      .then(response => this.setState({ userData: response.results }))

      .catch(err => this.setState({ error: 'something went wrong' }))
  }

  activeLinkHandler = (index) => {
    this.setState({
      activeLink: index,
     })
  }

  render() {
    var { userData, icons, style, } = this.state;
    if (this.state.error) {
      return <h1>Something went wrong</h1>
    }
    if (!this.state.userData) {
      return <Loader />
    }
    return (
      <div className="App">
        <h1 className='text-align'>Random User Generator</h1>
        <div className="profile">
          {userData.map((user, index) => (
            <Fragment key={user.cell} >
              <img src={user.picture.large} alt={user.picture.large} />
              {/* <PhaseGenerator user = {this.user} /> */}
              <div className="app_icons">

                {icons.map((icon, index)=> (
                  <i className={icon} key={index} style={style} onMouseEnter={() => this.activeLinkHandler(index) }></i>
                ))}
              </div>
            </Fragment>
          ))}
        </div>
        <Button isActive={this.activeUser} />
      </div>
    )
  }
}

// export class PhaseGenerator extends Component {

//   render(user) {
//     const phrases = [
//             `Hi my name is ${user.name.first} ${user.name.last}`,
//             `My email address is ${user.email}`,
//             `I was born on ${user.dob.date.slice(0, 10)}`,
//             `My country is ${user.location.country}`,
//             `My Phone number ${user.phone}`,
//             `My password is ${user.login.password}`
//         ]
//     return (
    
//       <h1>{phrases[this.state.activeLink]}</h1>
//     )
//   }
// }

export default App

