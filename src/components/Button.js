import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { btnName, className, handleClick } = props;
  return (
    <button className={className} type="button" onClick={() => handleClick(btnName)}>{btnName}</button>
  );
};
Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default Button;
