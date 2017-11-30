import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      //change if test to see it allow "authorized" user through to private page
      1 === 2 ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/forbidden',
          state: { from: props.location }
        }}/>
      )
    )}/>
  );

  export default PrivateRoute;