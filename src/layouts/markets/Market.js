import React, { Component } from 'react';
import QPTcards from '../../components/QPTcards';
import { qptContract } from '../dashboard/actions'
import { predictQueueLength } from './actions'

class Market extends Component {
  render() {

    console.log(qptContract)
    predictQueueLength()

    return(
      <main className="container" >
        <QPTcards/>
      </main>
    )
  }
}

export default Market
