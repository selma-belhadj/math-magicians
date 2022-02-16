/* eslint-disable react/prefer-stateless-function  */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { btnName, className } = this.props;
    return (
      <button className={className} type="button">{btnName}</button>
    );
  }
}
export default Button;
