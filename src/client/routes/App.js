import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "client/components/Header";
import { fetchCurrentUser } from "client/actions";

const App = ({ route }) => {
  return (
    <>
      <Header />
      {renderRoutes(route.routes)}
    </>
  );
};

App.loadSsrData = store => store.dispatch(fetchCurrentUser());

export default App;
