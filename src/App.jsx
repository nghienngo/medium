import React, { Component } from 'react';
import './scss/App.scss';
import CounterContainer from '../src/container/counterContainer';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <CounterContainer />
      </div>
    );
  }
}

export default App;
