import React from 'react';
import { BrouserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/home';
import About from './views/about';
import RegisterTitan from './views/register-titan';
import ListTitan from './views/list-titan';
import DetailTitan from './views/detail-titan';

const Routes = () =>  (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/register-titan" component={RegisterTitan} />
    <Route path="/list-titan" component={ListTitan} />
    <Route path="/detail-titan/:id" component={DetailTitan} />
  </Switch>
);

export default Routes;
