import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Button = (props) => (
  <a href="#" onClick={this.props.onClick} styleName="test">
    {this.props.text}
  </a>
);

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired
}

export default Button;
