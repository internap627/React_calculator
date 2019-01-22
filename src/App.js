import React, { Component } from 'react';
import './App.css';
import Calc from './Calc'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Calc />
        </header>
      </div>
    );
  }
}

export default App;
