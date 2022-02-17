import './style.css';
import React, { Component } from 'react';
import Button from './Button';
import OutputScreen from './OutputScreen';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { total: '0', next: null, operation: null };
  }

  handleClick = (element) => {
    const result = calculate(this.state, element);
    if (result.next === null && result.total === null) {
      result.total = '0';
    }
    this.setState(result);
  }

  render() {
    const { total, next, operation } = this.state;
    const calculatorElem = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '=']
      .map((elem) => {
        if (`${elem}` === 'AC' || `${elem}` === '+/-' || `${elem}` === '%' || `${elem}` === '.') {
          return <Button btnName={`${elem}`} className="operation" handleClick={this.handleClick} key={elem} />;
        } if (`${elem}` === 'x' || `${elem}` === '+' || `${elem}` === '-' || `${elem}` === '÷' || `${elem}` === '=') {
          return <Button btnName={`${elem}`} className="operator" handleClick={this.handleClick} key={elem} />;
        } if (`${elem}` === '0') {
          return <Button btnName={`${elem}`} className="number span-two" handleClick={this.handleClick} key={elem} />;
        }
        return <Button btnName={`${elem}`} className="number" handleClick={this.handleClick} key={elem} />;
      });
    return (
      <div className="calculator-grid">
        <OutputScreen previousOperand={total} operation={operation} currentOperand={next} />
        {calculatorElem}
      </div>
    );
  }
}

export default Calculator;
