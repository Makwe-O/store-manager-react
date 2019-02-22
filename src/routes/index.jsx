import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../components/views/LandingPage/LandingPage';
import NotFound from '../components/views/NotFound/NotFound';
import AdminDashBoard from '../components/views/AdminDashBoard/AdminDashBoard';
import AttendantDashBoard from '../components/views/AttendantDashBoard/AttendantDashBoard';
import Categories from '../components/views/Categories/Categories';

export default (
  <BrowserRouter>
    <>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/admin" component={AdminDashBoard} exact />
        <Route path="/categories" component={Categories} exact />
        <Route path="/attendant" component={AttendantDashBoard} exact />

        <Route component={NotFound} />
      </Switch>
    </>
  </BrowserRouter>
);
