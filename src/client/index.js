import React from "react";
import ReactDOM from "react-dom";
import routesConfig from "client/routes/routesConfig";
import createStore from "helpers/createStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { HelmetProvider } from "react-helmet-async";
import StyleContext from "isomorphic-style-loader/StyleContext";
import thunk from "redux-thunk";
import axios from "axios";
import "regenerator-runtime/runtime";

const clientAxios = axios.create({
  baseURL: "/api"
});

const store = createStore({
  preloadedState: window.__PRELOADED_STATE__,
  middleware: [thunk.withExtraArgument(clientAxios)]
});

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss());
  return () => removeCss.forEach(dispose => dispose());
};

ReactDOM.hydrate(
  <HelmetProvider>
    <StyleContext.Provider value={{ insertCss }}>
      <Provider store={store}>
        <BrowserRouter>{renderRoutes(routesConfig)}</BrowserRouter>
      </Provider>
    </StyleContext.Provider>
  </HelmetProvider>,
  document.getElementById("root")
);
