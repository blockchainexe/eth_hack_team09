import React, { Component } from 'react'
// UI Components
import LoginButtonContainer from '../../user/ui/loginbutton/LoginButtonContainer'

class Home extends Component {
  render() {
    return(
      <main className="container">
        <div className="home-content">
          <div className="pure-u-1-1">
            <h1>Welcome to Quick Pass!</h1>
          </div>
        </div>
        <img className="fit" src="https://i.pinimg.com/originals/e8/4f/35/e84f3550abe53da48f47f6b1dbada5f6.jpg" alt="Trulli" ></img>
      </main>
    )
  }
}

export default Home
