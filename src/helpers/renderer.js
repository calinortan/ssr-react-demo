import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import routesConfig from "client/routes/routesConfig";
import serialize from "serialize-javascript";
import { renderRoutes } from "react-router-config";
import { HelmetProvider } from "react-helmet-async";

const renderer = (store, path, context) => {
  const content = renderToString(
    <HelmetProvider context={context}>
      <StaticRouter location={path} context={context}>
        <Provider store={store}>{renderRoutes(routesConfig)}</Provider>
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = context;

  helmet.title.toString();

  return `<html>
    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    </head>
    <body>
      <div id="root">${content}</div>
      <script>
        window.__PRELOADED_STATE__ = ${serialize(store.getState())}
      </script>
      <script src="bundle.js"></script>
    </body>
  </html>`;
};

export default renderer;
