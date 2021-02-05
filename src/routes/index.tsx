import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import RandomQuoteMachine from '../pages/RandomQuoteMachine';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/random-quote-machine" component={RandomQuoteMachine} />
  </Switch>
);

export default Routes;
