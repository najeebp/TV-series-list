import React, { Component } from 'react';
import './App.css';
import './output.css';
import Series from './containers/Series'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div>
          <Series />
        </div>
      </ Provider>
    );
  }
}

export default App;
