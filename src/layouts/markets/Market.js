import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Dialog, FlatButton, RaisedButton } from 'material-ui'
import QPTcards from '../../components/QPTcards';
import Form from '../AttestationForm'

class Market extends Component {
  constructor(props, {authData}) {
    super(props)
    this.state = {
      dialogOpen: false
    }
    this.dialogClose = this.dialogClose.bind(this)
    this.dialogOpen = this.dialogOpen.bind(this)
  }

  dialogOpen() {
    return this.setState({ dialogOpen: true })
  }

  dialogClose() {
    return this.setState({ dialogOpen: false })
  }

  render() {

    const { dialogOpen }  = this.state

    const actions = [
      <div>
        <FlatButton label="Cancel" onClick={() => { this.dialogClose() } } ></FlatButton>
        <RaisedButton label="Buy" primary={true} type="submit" ></RaisedButton>
      </div>
    ]

    return(
      <main className="container" >
          <Dialog
              open={dialogOpen}
              autoScrollBodyContent={true}
              onRequestClose={this.dialogClose}
              actions={actions}
            >
              <Form/>
          </Dialog>
        <FlatButton onClick={() => {this.dialogOpen()} } label="オープン"></FlatButton>
        <QPTcards/>
      </main>
    )
  }
}

export default Market