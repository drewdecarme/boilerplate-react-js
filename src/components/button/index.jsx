import React, { Component } from 'react';

import './index.scss';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href='#' onClick={this.props.onClick} styleName='test'>
        {this.props.text}
      </a>
    );
  }
}
