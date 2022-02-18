import './style.css';
import React, { useState } from 'react';
import Button from './Button';
import OutputScreen from './OutputScreen';
import calculate from '../logic/calculate';

const Calculator2 = () => {
  const [calObj, setCalObg] = useState({ total: '0', next: null, operation: null });
  //   const [total, setTotal] = useState(0);
  //   const [next, setNext] = useState(null);
  //   const [operation, setOperation] = useState(null);

  const handleClick = (element) => {
    // const result = calculate(calObj, element);
    // if (result.next === null && result.total === null) {
    //   result.total = '0';
    // }
    setCalObg(() => calculate(calObj, element));
  };
  const { total, next, operation } = calObj;
  //   console.log('total :', total);
  //   console.log('next :', next);
  //   console.log('operation :', operation);
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

export default Calculator2;
