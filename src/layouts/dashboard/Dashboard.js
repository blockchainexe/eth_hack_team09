import React, { Component } from 'react'
import AttestationForm from '../AttestationForm'
import TransactionRequestForm from '../TransactionRequestForm'
import { decode } from 'mnid'

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    const avatar = this.props.authData.avatar && this.props.authData.avatar.uri
    const addressDecode = decode(this.props.authData.address)
    console.log('==== addressDecode ====')
    console.log(addressDecode.address)

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
                width:"150px"
              }}
            />
            <h2>{this.props.authData.name}</h2>
            <div
              style={{
                display: "inline-block",
                float:"left",
                width:"25%"
              }}
      >
      <h3>phone:{this.props.authData.phone}</h3>
      <h3>email: {this.props.authData.email}</h3>
            </div>
            <div
              style={{
                marginTop: "-300px",
                display: "inline-block",
                float:"left",
                width:"70%"
              }}
            >
              <h2> My Quick-Pass Tokens </h2>
              <h4> Wallet Address: {addressDecode.address} </h4>
              <table>
                <tr>
                  <th>Spot Name</th>
                  <th>Quick-Pass Amount</th>
                  <th>Action</th>
                </tr>
                <tr>
                  <td> Yajima (Sushi restaurant)</td>
                  <td>1</td>
                  <td><button className="button button1">Use Quick-Pass Token</button></td>
                </tr>
                <tr>
                  <td> Ippudo (Noodle restaurant)</td>
                  <td>1</td>
                  <td><button className="button button1">Use Quick-Pass Token</button></td>
                </tr>
                <tr>
                  <td> Yajima (Sushi restaurant)</td>
                  <td>1</td>
                  <td><button className="button button1">Use Quick-Pass Token</button></td>
                </tr>
                <tr>
                  <td> SkyTree (Tourist Spot)</td>
                  <td>1</td>
                  <td><button className="button button1">Use Quick-Pass Token</button></td>
                </tr>
                <tr>
                  <td> Tempura Kondo (Tempura restaurant)</td>
                  <td>1</td>
                  <td><button className="button button1">Use Quick-Pass Token</button></td>
                </tr>
                <tr>
                  <td> Cure Maid Cafe (Cafe)</td>
                  <td>1</td>
                  <td><button className="button button1">Use Quick-Pass Token</button></td>
                </tr>
              </table>
            </div>
        </div>
        </div>
        </div>
      </main>
    )
  }
}

export default Dashboard
