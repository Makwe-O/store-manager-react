import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../components/views/LandingPage/LandingPage';
import NotFound from '../components/views/NotFound/NotFound';

export default (
  <BrowserRouter>
    <>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route component={NotFound} />
      </Switch>
    </>
  </BrowserRouter>
);
