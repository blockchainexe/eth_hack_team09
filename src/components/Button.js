import React from 'react'
import { MuiThemeProvider as V0MuiThemeProvider} from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton'

const materialFlatButton = () => {
  return (
    <V0MuiThemeProvider>
      <FlatButton >
        hoge
      </FlatButton>
    </V0MuiThemeProvider>
  );
}

export default materialFlatButton;