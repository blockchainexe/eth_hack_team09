import JsonRpcClient from './../../util/react-jsonrpc-client/jsonrpcclient.js'

export function predictQueueLength() {
  console.log("predictQueueLength")
  var api = new JsonRpcClient({
    endpoint: 'http://localhost:5000/call_func',
    headers: {}
  })
  api.request(
    "call_func",
    "QmRWSKSZVVkvQsnE4V6kavKoAMabHBDJM29EPstzq4cCtQ",
    "QmeTKajqCKFoKUmWEj8h2ACiG9BUDKPPNYiLBoup1Uewuf",
    1,
    11
  ).then(function(response) {
    console.log('hogehogehoge')
    console.log(response)
  }.bind(this)) // End .then()
}
