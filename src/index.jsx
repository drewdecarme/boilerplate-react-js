import { AppContainer } from 'react-hot-loader'; // required
import React from 'react';
import { render } from 'react-dom';
import App from './components/app.jsx'; // App
import './base_styles/base.scss';


renderWithHotReload(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/app.jsx', () => {
    const App = require('./components/app.jsx').default;
    renderWithHotReload(App);
  });
}

function renderWithHotReload(App) {
  render(
    <App />
    , document.getElementById('application')
  );
}
