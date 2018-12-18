import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Signup from '../ui/Signup';
import Link from '../ui/Link';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';
import Home from '../ui/Home';
import Property from '../ui/Property';
import PlotOwner from '../ui/PlotOwner';
import FlatOwner from '../ui/FlatOwner';
import Rental from '../ui/Rental';
import Tenant from '../ui/Tenant';
import Tenantinfo from '../ui/Tenantinfo';
import TenantMember from '../ui/TenantMember';
import TenantRecommendation from '../ui/TenantRecommendation';
import TenantMemberInfo from '../ui/TenantMemberInfo';
import Vehicle from '../ui/Vehicle';
import Employee from '../ui/Employee';
import TenantDetails from '../ui/TenantDetails';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links', '/property', 'plot-owner' , 'flat-owner', 'renetal', 'tenant', 'tenantinfo', 'tenant-member', 'tenant-recommendation', 'tenant-member-info', 'vehicle', 'employee', 'tenant-details'];
const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    browserHistory.replace('/links');
  }
};
const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.replace('/');
  }
};
export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.replace('/property');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace('/');
  }
};
export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login} onEnter={onEnterPublicPage}/>
    <Route path="/home" component={Home} onEnter={onEnterPublicPage}/>
    <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
    <Route path="/links" component={Link} onEnter={onEnterPrivatePage}/>
    <Route path="/property" component={Property} onEnter={onEnterPrivatePage}/>
    <Route path="/plot-owner" component={PlotOwner} onEnter={onEnterPrivatePage}/>
    <Route path="/flat-owner" component={FlatOwner} onEnter={onEnterPrivatePage}/>
    <Route path="/rental" component={Rental} onEnter={onEnterPrivatePage}/>
    <Route path="/tenant" component={Tenant} onEnter={onEnterPrivatePage}/>
    <Route path="/tenantinfo" component={Tenantinfo} onEnter={onEnterPrivatePage}/>
    <Route path="/tenant-member" component={TenantMember} onEnter={onEnterPrivatePage}/>
    <Route path="/tenant-recommendation" component={TenantRecommendation} onEnter={onEnterPrivatePage}/>
    <Route path="/tenant-member-info" component={TenantMemberInfo} onEnter={onEnterPrivatePage}/>
    <Route path="/vehicle" component={Vehicle} onEnter={onEnterPrivatePage}/>
    <Route path="/employee" component={Employee} onEnter={onEnterPrivatePage}/>
    <Route path="/tenant-details" component={TenantDetails} onEnter={onEnterPrivatePage}/>

    <Route path="*" component={NotFound}/>
  </Router>
);
