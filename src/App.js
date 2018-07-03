import React, { Component } from 'react';
import Panel from './components/Panel';


import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  

  render() {
    return (
      <Provider store ={store}>
        <Panel/>
      </Provider>
    );
  }
}

export default App;
