import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import QPTcards from '../../components/QPTcards';

class Market extends Component {
  render() {
    
    return(
      <main className="container" >
        <QPTcards/>
      </main>
    )
  }
}

export default Market