import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import qptImage from '../img/image.json';

const cardSize = {
  width: '21vw',
  margin: '24px'
}

const chart = "https://s3-ap-northeast-1.amazonaws.com/lp.pon.gospot.site/hackathon/%E3%83%81%E3%83%A3%E3%83%BC%E3%83%88.png"

const QPTcard = (props) => (
      <Card style={ cardSize }>
        <CardMedia>
          <img src={ props.imageUrl } alt={ props.name } style={{ height: '200px' }} />
        </CardMedia>
        <CardHeader
          title={ props.tokenName }
          subtitle={ props.shopName }
          avatar={ props.imageUrl }
        />
        <CardText>
          {props.description}
        </CardText>
        <CardActions>
          <FlatButton label="購入" />
          <FlatButton label="詳細" />
        </CardActions>
      </Card>
)

const cardsWrap = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alineItems: 'center',
  padding: '36px'
}

const QPTcards = () => (
   <div style={cardsWrap} >
    <QPTcard 
      imageUrl={ qptImage.sushi[0].url }
      name={ qptImage.sushi[0].name }
      tokenName="sushiQPT-1"
      shopName="Yajima"
      description="とても美味しいお寿司です。"
      />
    <QPTcard 
      imageUrl={ qptImage.skytree[0].url }
      name={ qptImage.skytree[0].name }
      tokenName="skytreeQPT-2"
      shopName="SkyTree"
      description="とても高いです。"
    />
    <QPTcard 
      imageUrl={ qptImage.noodle[0].url }
      name={ qptImage.noodle[0].name }
      tokenName="noodleQPT-3"
      shopName="Ippudo"
      description="とてもアツいです。"
    />
    <QPTcard 
      imageUrl={ qptImage.tempura[0].url }
      name={ qptImage.tempura[0].name }
      tokenName="tempuraQPT-4"
      shopName="Tempura-tensei"
      description="とても高級です。"
    />
    <QPTcard 
      imageUrl={ qptImage.kabuki[0].url }
      name={ qptImage.kabuki[0].name }
      tokenName="kabukiQPT-5"
      shopName="Kabuki"
      description="とても歌舞伎です。"
    />
    <QPTcard 
      imageUrl={ qptImage.maid[0].url }
      name={ qptImage.maid[0].name }
      tokenName="maidQPT-6"
      shopName="Maid-Cafe"
      description="とてもかわいいです。"
    />
   </div>
);

export default QPTcards