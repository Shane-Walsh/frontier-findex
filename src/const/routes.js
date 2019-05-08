import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashBoard from '../components/DashBoard';

const Routes = () => (

  <Switch>
    <Route exact path="/" component={DashBoard} />
  </Switch>
)

export default Routes;
