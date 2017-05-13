import React from 'react';
import { AppContainer } from 'react-hot-loader'; // required
import { render } from 'react-dom';
import App from './components/app'; // App

import './base_styles/base.scss';

const renderWithHotReload = () => (
  render(
    <App />
    , document.getElementById('application')
  )
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/app.jsx', () => {
    const App = require('./components/app.jsx').default;
    renderWithHotReload(App);
  });
}

renderWithHotReload(App);
