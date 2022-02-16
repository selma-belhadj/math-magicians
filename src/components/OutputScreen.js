/* eslint-disable react/prefer-stateless-function  */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';

class OutputScreen extends Component {
  render() {
    const { previousOperand, operation, currentOperand } = this.props;
    return (
      <div className="output">
        <div className="previous-operand">
          {previousOperand}
          {' '}
          {operation}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>
    );
  }
}

export default OutputScreen;
