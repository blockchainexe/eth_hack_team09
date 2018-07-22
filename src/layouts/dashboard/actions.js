// import ERC20 from './QPT_ABI.json';
import { abi as sushi } from '../../json/QPT-1.json'
import { abi as noodle } from '../../json/QPT-2.json'
import { abi as skytree } from '../../json/QPT-3.json'
import { abi as tempura } from '../../json/QPT-4.json'
import { abi as kabuki } from '../../json/QPT-5.json'
import { abi as maid } from '../../json/QPT-6.json'
import { uport } from './../../util/connectors.js'
import settings from './../../util/settings.js'
import { browserHistory } from 'react-router'

export const qptContract = [
  { abi: sushi,  contract: settings.qptContractAddress_1 },
  { abi: noodle, contract: settings.qptContractAddress_2 },
  { abi: skytree, contract: settings.qptContractAddress_3 },
  { abi: tempura, contract: settings.qptContractAddress_4 },
  { abi: kabuki, contract: settings.qptContractAddress_5 },
  { abi: maid, contract: settings.qptContractAddress_6 }
]


export const USE_QPT_REQUEST = 'USE_QPT_REQUEST'

function userLoggedin(qptNum) {
  return {
    type: USE_QPT_REQUEST,
    payload: qptNum
  }
}

export function useQptRequest(qptNum) {
  return function(dispatch, props) {
     const contractInstance = uport.contract(qptContract[qptNum].abi)
     const contract = contractInstance.at(qptContract[qptNum].contract)
    // contract.transfer(data.ethAddress, 500);
    
    // yosuke's eth address 
     return contract.transfer('0xaae900BAe6d741b3cD4aD9a0b07A21413420Ce0c', 100);
  }
}
