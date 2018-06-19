import React, { Component } from 'react';
import AppUI from '../mson-react/app';
import app from './mson-app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blueGrey, lightBlue } from '@material-ui/core/colors';
import { BrowserRouter, Prompt } from 'react-router-dom';
import globals from '../mson/globals';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    // primary: blue,
    // type: 'dark',
    // secondary: cyan
    secondary: lightBlue
  }
});

// Note: BrowserRouter needs to be outside of App so that we can use withRouter
class App extends Component {
  onNavigate = (message, callback) => {
    globals.onNavigate(message, callback);
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter getUserConfirmation={this.onNavigate}>
          {/* Wrapping div required by BrowserRouter */}
          <div>
            <AppUI app={app} />

            {/* A Prompt is needed to capture back/forward button events with ReactRouter. message
            is required, but the value is arbitrary */}
            <Prompt message="foo" />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
