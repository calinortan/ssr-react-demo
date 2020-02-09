import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { isAuthenticated } from "client/selectors";

export default WrappedComponent => {
  const RequireAuth = props => {
    const isAuthenticated = useSelector(isAuthenticated);

    if (!isAuthenticated) {
      return <Redirect to="/" />;
    }

    return <WrappedComponent {...props} />;
  };

  return RequireAuth;
};
