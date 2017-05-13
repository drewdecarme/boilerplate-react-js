import React from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './home/index';
import Topics from './topics/index';

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
)


export default App;
