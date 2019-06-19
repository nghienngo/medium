import React, { Component } from 'react';
import './scss/App.scss';
import '../src/scss/index.scss';
import CounterContainer from '../src/container/counterContainer';
import Home from '../src/container/Home/index';

class App extends Component {
  render() {
    return (
      <div className="App container">
          <Home />
          <CounterContainer /> 
      </div>
    );
  }
}

export default App;
