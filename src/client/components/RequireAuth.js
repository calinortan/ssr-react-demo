import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default WrappedComponent => {
  const RequireAuth = props => {
    const isAuthenticated = useSelector(state => !!state.auth);

    if (!isAuthenticated) {
      return <Redirect to="/" />;
    }

    return <WrappedComponent {...props} />;
  };

  return RequireAuth;
};
