import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../components/views/LandingPage/LandingPage';
import NotFound from '../components/views/NotFound/NotFound';
import AttendantDashBoard from '../components/views/DashBoard/AttendantDashBoard';

export default (
  <BrowserRouter>
    <>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/attendant" component={AttendantDashBoard} exact />
        <Route component={NotFound} />
      </Switch>
    </>
  </BrowserRouter>
);
