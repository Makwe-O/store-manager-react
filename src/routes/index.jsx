import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../components/views/LandingPage/LandingPage';
import NotFound from '../components/views/NotFound/NotFound';
import AdminDashBoard from '../components/views/AdminDashBoard/AdminDashBoard';
import AttendantDashBoard from '../components/views/AttendantDashBoard/AttendantDashBoard';
import Categories from '../components/views/Categories/Categories';
import SalesRecords from '../components/views/SalesRecords/SalesRecords';
import AddProduct from '../components/views/AddProduct/AddProduct';
import AddAttendant from '../components/views/AddAttendant/AddAttendant';
import AddCategory from '../components/views/AddCategory/AddCategory';

export default (
  <BrowserRouter>
    <>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/admin" component={AdminDashBoard} exact />
        <Route path="/categories" component={Categories} exact />
        <Route path="/addcategory" component={AddCategory} exact />
        <Route path="/sales" component={SalesRecords} exact />
        <Route path="/addproduct" component={AddProduct} exact />
        <Route path="/addattendant" component={AddAttendant} exact />
        <Route path="/attendant" component={AttendantDashBoard} exact />

        <Route component={NotFound} />
      </Switch>
    </>
  </BrowserRouter>
);
