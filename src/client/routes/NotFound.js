import React from "react";

const NotFound = ({ staticContext = {} }) => {
  staticContext.notFound = true;

  return <h4>Oops, page not found.</h4>;
};

export default NotFound;
