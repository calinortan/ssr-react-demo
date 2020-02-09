import React from "react";
import { useSelector } from "react-redux";
import { isAuthenticated } from "client/selectors";
import Dashboard from "client/routes/Home/Dashboard";

const UnauthenticatedHome = () => {
  return (
    <>
      <h3 className="center-align" style={{ marginTop: "200px" }}>
        Welcome
      </h3>
      <p className="center-align">This is a great SSR app</p>
    </>
  );
};

const Home = () => {
  const isLoggedIn = useSelector(isAuthenticated);
  if (isLoggedIn) {
    return <Dashboard />;
  }

  return <UnauthenticatedHome />;
};

export default Home;
