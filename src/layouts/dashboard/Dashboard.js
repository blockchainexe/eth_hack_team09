import React, { Component } from 'react'
import {connect} from 'react-redux'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import { decode } from 'mnid'
import settings from './../../util/settings.js'
import { uport, web3 } from './../../util/connectors.js'
import QPT_1 from '../../json/QPT-1.json'
import QPT_2 from '../../json/QPT-2.json'
import QPT_3 from '../../json/QPT-3.json'
import QPT_4 from '../../json/QPT-4.json'
import QPT_5 from '../../json/QPT-5.json'
import QPT_6 from '../../json/QPT-6.json'
import { useQptRequest } from './actions'

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(44, 62, 80, 0.75)'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props

    this.state = {
      modalIsOpen: false,
      tokenNum: '0' // use for useQptRequest
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.changeToken = this.changeToken.bind(this);
  }

  submit = (value, state, props)=>{
    props.useQptRequest(value)
  }

  changeToken(value) {
    this.setState({tokenNum: value})
    this.setState({modalIsOpen: true})
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    this.subtitle.style.color = '#e74c3c';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
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

    const { useQptRequest } = this.props

    return(
      <main className="container">

      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={subtitle => this.subtitle = subtitle}>Quick-Pass</h2>
        <div>Now you can skip the line.</div>
        <button className="button button2" onClick={this.closeModal}>close</button>
        <button className="button button2" onClick={() => {useQptRequest(this.state.tokenNum)}}>send token</button>
      </Modal>

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
      <td><button onClick={() => {this.changeToken('0')}} className="button button1">Use Quick-Pass Token</button></td>
      </tr>
      <tr>
      <td> Ippudo (Noodle restaurant)</td>
      <td>1</td>
      <td><button onClick={() => {this.changeToken('1')}} className="button button1">Use Quick-Pass Token</button></td>
      </tr>
      <tr>
      <td> SkyTree (Tourist Spot)</td>
      <td>1</td>
      <td><button onClick={() => {this.changeToken('2')}} className="button button1">Use Quick-Pass Token</button></td>
      </tr>
      <tr>
      <td> Tempura Kondo (Tempura restaurant)</td>
      <td>1</td>
      <td><button onClick={() => {this.changeToken('3')}} className="button button1">Use Quick-Pass Token</button></td>
      </tr>
      <tr>
      <td> Kabuki (Entertainment)</td>
      <td>1</td>
      <td><button onClick={() => {this.changeToken('4')}} className="button button1">Use Quick-Pass Token</button></td>
      </tr>
      <tr>
      <td> Cure Maid Cafe (Cafe)</td>
      <td>1</td>
      <td><button onClick={() => {this.changeToken('5')}} className="button button1">Use Quick-Pass Token</button></td>
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

const mapStateToProps = (state, props) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    useQptRequest: (value) => { 
      event.preventDefault();
      dispatch(useQptRequest(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
