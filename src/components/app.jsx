import React, { Component } from 'react';
import Button from './button/index.jsx';

export default class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <Button text="this is a button!"/>
      </div>
    );
  }
}
