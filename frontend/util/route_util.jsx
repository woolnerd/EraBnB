import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter, Route } from 'react-router';

const mSTP = state => {
  return { loggedIn: Boolean(state.session.id) };
};

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={props =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const Protected = ({ loggedIn, path, component: Component }) => (
  <Route path={path} render={ props =>
      loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);



export const AuthRoute = withRouter(
  connect(mSTP, null)(Auth)
);

export const ProtectedRoute = withRouter(
  connect(mSTP, null)(Protected)
)