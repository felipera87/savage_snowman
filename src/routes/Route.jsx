import React, { useCallback } from 'react';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

const Route = ({ component: Component, isPrivate, ...rest }) => {
  const { isLoggedIn } = useAuth();

  const canAccessPage = useCallback(() => {
    if (isPrivate) {
      return isLoggedIn;
    }

    return true;
  }, [isLoggedIn, isPrivate]);

  const redirect = location => {
    if (canAccessPage()) {
      return <Component />;
    }

    return <Redirect to={{ pathname: '/', state: { from: location } }} />;
  };

  return <ReactDOMRoute {...rest} render={redirect} />;
};

export default Route;
