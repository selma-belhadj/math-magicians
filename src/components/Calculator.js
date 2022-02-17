import './style.css';
import React, { PureComponent } from 'react';
import Button from './Button';
import OutputScreen from './OutputScreen';

class Calculator extends PureComponent {
  render() {
    return (
      <div className="calculator-grid">
        <OutputScreen previousOperand="888" operation="+" currentOperand="999" />
        <Button btnName="AC" className="operation" />
        <Button btnName="+/-" className="operation" />
        <Button btnName="%" className="operation" />
        <Button btnName="÷" className="operator" />
        <Button btnName="7" className="number" />
        <Button btnName="8" className="number" />
        <Button btnName="9" className="number" />
        <Button btnName="X" className="operator" />
        <Button btnName="4" className="number" />
        <Button btnName="5" className="number" />
        <Button btnName="6" className="number" />
        <Button btnName="–" className="operator" />
        <Button btnName="1" className="number" />
        <Button btnName="2" className="number" />
        <Button btnName="3" className="number" />
        <Button btnName="+" className="operator" />
        <Button btnName="0" className="number span-two" />
        <Button btnName="." className="operation" />
        <Button btnName="=" className="operator" />
      </div>
    );
  }
}

export default Calculator;
