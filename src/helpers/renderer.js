import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import routesConfig from "client/routes/routesConfig";
import serialize from "serialize-javascript";
import { renderRoutes } from "react-router-config";
import { HelmetProvider } from "react-helmet-async";
import StyleContext from "isomorphic-style-loader/StyleContext";

const renderer = (store, path, context) => {
  const css = new Set(); // CSS for all rendered React components
  const insertCss = (...styles) =>
    styles.forEach(style => css.add(style._getCss()));

  const content = renderToString(
    <HelmetProvider context={context}>
      <StaticRouter location={path} context={context}>
        <StyleContext.Provider value={{ insertCss }}>
          <Provider store={store}>{renderRoutes(routesConfig)}</Provider>
        </StyleContext.Provider>
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = context;

  helmet.title.toString();

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <style>${[...css].join("")}</style>
    </head>
    <body>
      <div id="root">${content}</div>
      <script>
        window.__PRELOADED_STATE__ = ${serialize(store.getState())}
      </script>
      <script src="bundle.js"></script>
    </body>
  </html>
  `;
};

export default renderer;
