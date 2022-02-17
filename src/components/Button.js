import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Button extends PureComponent {
  render() {
    const { btnName, className } = this.props;
    return (
      <button className={className} type="button">{btnName}</button>
    );
  }
}

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
export default Button;
