import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import MainLayout from './components/MainLayout'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/*" component={MainLayout} />
      </Switch>
    </Router>
  );
}

export default App;
