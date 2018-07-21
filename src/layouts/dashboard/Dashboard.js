import React, { Component } from 'react'
import AttestationForm from '../AttestationForm'
import TransactionRequestForm from '../TransactionRequestForm'
class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    const avatar = this.props.authData.avatar && this.props.authData.avatar.uri
    return(
      <main className="container">
        <div className="pure-g">

        <div
              style={{
                display: "inline-block",
                margin: "0 auto",
                padding: 30,
                width:"980px"
              }}
            >
          <div className="pure-u-1-1">
            <h1>Dashboard</h1>
            <img src={avatar} 
              style={{
                border: "2px solid #FFF",
                borderRadius: 99999,
                boxShadow: "2px 3px 1px #000",
                width:"110px"
              }}
            />
            <h2>{this.props.authData.name}</h2>
            <h3>phone:{this.props.authData.phone}</h3>
            <h3>email: {this.props.authData.email}</h3>
            <p><strong>Congratulations {this.props.authData.name} from {this.props.authData.country}!</strong> If you're seeing this page, you've logged in with UPort successfully.</p>
            <div
              style={{
                display: "inline-block",
                float:"left",
                width:"40%"
              }}
            >
              <h3>Generate Attestation</h3>
              <AttestationForm/>
            </div>
            <div
              style={{
                display: "inline-block",
                float:"left",
                width:"40%"
              }}
            >

              <h3>Send ERC20 PAK Token</h3>
              <TransactionRequestForm/>
            </div>
          </div>
        </div>
        </div>
      </main>
    )
  }
}

export default Dashboard
