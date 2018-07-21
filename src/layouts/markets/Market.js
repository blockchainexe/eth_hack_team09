import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import QPTcards from '../../components/QPTcards';

class Market extends Component {
  render() {
    const QPTcard = () => (
      <Card style={ {width: '18vw', margin: '8px' } }>
        <CardMedia>
          <img src="https://github.com/truffle-box/react-uport-box/blob/master/box-img-lg.png?raw=true" alt="" />
        </CardMedia>
        <CardHeader
          title="QPT-1"
          subtitle="Subtitle"
          avatar="https://github.com/truffle-box/react-uport-box/blob/master/box-img-lg.png?raw=true"
        />
        {/* <CardTitle title="Card" subtitle="Card subtitle" /> */}
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
);
    return(
      <main className="container" >
        <h1>QPT Market Place</h1>
        <div style={{ display: 'flex', flexDirection: 'row' }} >
        <QPTcard/>
        <QPTcards/>
        <QPTcards/>
        <QPTcards/>
        <QPTcards/>
        </div>
      </main>
    )
  }
}

export default Market