/* eslint-disable react/prefer-stateless-function  */

import './App.css';
import React, { Component } from 'react';
import Calculator from './components/Calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
