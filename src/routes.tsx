import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CheckIn from './routes/CheckIn';
import Leaderboard from './routes/Leaderboard';
import Retail from './routes/Retail';
import Company from './routes/Company';
import Dashboard from './routes/Dashboard';
export const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={CheckIn} />
      <Route path='/retail' component={Retail} />
      <Route path='/leaderboard/:year' component={Leaderboard} />
      <Route path='/companies/:year/:id' component={Company} />
      <Route path='/dashboard/' component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default routes;
