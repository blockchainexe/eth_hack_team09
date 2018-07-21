import ERC20 from './ERC20ABI.json'
import { uport } from './../../util/connectors.js'
import settings from './../../util/settings.js'
import { browserHistory } from 'react-router'
export const TRANSACTION_REQUEST = 'TRANSACTION_REQUEST'
function userLoggedIn(data) {
  return {
    type: TRANSACTION_REQUEST,
    payload: data
  }
}

console.log(settings)

export function transactionRequest(data) {
  return function(dispatch, props) {
    const contractInstance = uport.contract(ERC20)
    const contract = contractInstance.at(settings.erc20Address)
    // contract.transfer(data.ethAddress, 500);
    return !data.ethAddress ? null : contract.transfer(data.ethAddress, 500);
  }
}
