import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashBoard from '../components/DashBoard';
import Headlines from './components/Headlines';

const Routes = () => (

  <Switch>
    <Route exact path="/" component={DashBoard} />
    <Route exact path="/news" component={Headlines} />
  </Switch>
)

export default Routes;
