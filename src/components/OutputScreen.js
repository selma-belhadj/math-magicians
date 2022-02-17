import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class OutputScreen extends PureComponent {
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
OutputScreen.propTypes = {
  previousOperand: PropTypes.number.isRequired,
  operation: PropTypes.string.isRequired,
  currentOperand: PropTypes.number.isRequired,
};
export default OutputScreen;
