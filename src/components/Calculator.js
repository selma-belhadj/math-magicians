import './style.css';
import React, { useState } from 'react';
import Button from './Button';
import OutputScreen from './OutputScreen';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calObj, setCalObg] = useState({ total: '0', next: null, operation: null });
  const handleClick = (element) => {
    setCalObg(() => calculate(calObj, element));
  };
  const { total, next, operation } = calObj;
  const calculatorElem = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '=']
    .map((elem) => {
      if (`${elem}` === 'AC' || `${elem}` === '+/-' || `${elem}` === '%' || `${elem}` === '.') {
        return <Button btnName={`${elem}`} className="operation" handleClick={handleClick} key={elem} />;
      } if (`${elem}` === 'x' || `${elem}` === '+' || `${elem}` === '-' || `${elem}` === '÷' || `${elem}` === '=') {
        return <Button btnName={`${elem}`} className="operator" handleClick={handleClick} key={elem} />;
      } if (`${elem}` === '0') {
        return <Button btnName={`${elem}`} className="number span-two" handleClick={handleClick} key={elem} />;
      }
      return <Button btnName={`${elem}`} className="number" handleClick={handleClick} key={elem} />;
    });
  return (
    <div className="calculator-grid">
      <OutputScreen previousOperand={total} operation={operation} currentOperand={next} />
      {calculatorElem}
    </div>
  );
};

export default Calculator;
