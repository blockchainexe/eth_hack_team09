import React, { Component } from 'react'
import { decode } from 'mnid'
import settings from './../../util/settings.js'
import { uport, web3 } from './../../util/connectors.js'
import QPT_1 from '../../json/QPT-1.json'
import QPT_2 from '../../json/QPT-2.json'
import QPT_3 from '../../json/QPT-3.json'
import QPT_4 from '../../json/QPT-4.json'
import QPT_5 from '../../json/QPT-5.json'
import QPT_6 from '../../json/QPT-6.json'

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    const avatar = this.props.authData.avatar && this.props.authData.avatar.uri
    const addressDecode = decode(this.props.authData.address)

    // Contract

    var amount1 = 0;
    var amount2 = 0;
    var amount3 = 0;
    var amount4 = 0;
    var amount5 = 0;
    var amount6 = 0;
    var tokenInst1 = web3.eth.contract(QPT_1.abi).at(settings.qptContractAddress_1);
    var tokenInst2 = web3.eth.contract(QPT_2.abi).at(settings.qptContractAddress_2);
    var tokenInst3 = web3.eth.contract(QPT_3.abi).at(settings.qptContractAddress_3);
    var tokenInst4 = web3.eth.contract(QPT_4.abi).at(settings.qptContractAddress_4);
    var tokenInst5 = web3.eth.contract(QPT_5.abi).at(settings.qptContractAddress_5);
    var tokenInst6 = web3.eth.contract(QPT_6.abi).at(settings.qptContractAddress_6);

    tokenInst1.balanceOf.call(addressDecode.address, function (error, result) {
      if (!error) {
        amount1 = (result.toNumber() / (10 ** 2)) // decimals = 2
        var table = document.getElementById("token-table");
        table.rows[1].cells[1].innerText = amount1;
      } else {
        console.error(error);
      }
    });

    tokenInst2.balanceOf.call(addressDecode.address, function (error, result) {
      if (!error) {
        amount2 = (result.toNumber() / (10 ** 2)) // decimals = 2
        var table = document.getElementById("token-table");
        table.rows[2].cells[1].innerText = amount2;
      } else {
        console.error(error);
      }
    });

    tokenInst3.balanceOf.call(addressDecode.address, function (error, result) {
      if (!error) {
        amount3 = (result.toNumber() / (10 ** 2)) // decimals = 2
        var table = document.getElementById("token-table");
        table.rows[3].cells[1].innerText = amount3;
      } else {
        console.error(error);
      }
    });

    tokenInst4.balanceOf.call(addressDecode.address, function (error, result) {
      if (!error) {
        amount4 = (result.toNumber() / (10 ** 2)) // decimals = 2
        var table = document.getElementById("token-table");
        table.rows[4].cells[1].innerText = amount4;
      } else {
        console.error(error);
      }
    });

    tokenInst5.balanceOf.call(addressDecode.address, function (error, result) {
      if (!error) {
        amount5 = (result.toNumber() / (10 ** 2)) // decimals = 2
        var table = document.getElementById("token-table");
        table.rows[5].cells[1].innerText = amount5;
      } else {
        console.error(error);
      }
    });

    tokenInst6.balanceOf.call(addressDecode.address, function (error, result) {
      if (!error) {
        amount6 = (result.toNumber() / (10 ** 2)) // decimals = 2
        var table = document.getElementById("token-table");
        table.rows[6].cells[1].innerText = amount6;
      } else {
        console.error(error);
      }
    });

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
      <table id="token-table">
      <tr>
      <th>Spot Name</th>
      <th>Quick-Pass Amount</th>
      <th>Action</th>
      </tr>
      <tr>
      <td> Yajima (Sushi restaurant)</td>
      <td>{amount1}</td>
      <td><button className="button button1">Use Quick-Pass Token</button></td>
      </tr>
      <tr>
      <td> Ippudo (Noodle restaurant)</td>
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
      <td> Kabuki (Entertainment)</td>
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
