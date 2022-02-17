import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Button extends PureComponent {
  render() {
    const { btnName, className, handleClick } = this.props;
    return (
      <button className={className} type="button" onClick={() => { handleClick(btnName); }}>{btnName}</button>
    );
  }
}

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default Button;
