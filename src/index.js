import express from "express";
import proxy from "express-http-proxy";
import renderer from "helpers/renderer";
import createStore from "helpers/createStore";
import "regenerator-runtime/runtime";
import { matchRoutes } from "react-router-config";
import routesConfig from "client/routes/routesConfig";
import thunk from "redux-thunk";
import axios from "axios";

const app = express();

app.use("/api", proxy("http://localhost:5000"));
app.use(express.static("public"));
app.get("*", async (req, res) => {
  const serverAxios = axios.create({
    baseURL: "http://localhost:5000",
    headers: { cookie: req.get("cookie") || "" }
  });

  const store = createStore({
    middleware: [thunk.withExtraArgument(serverAxios)]
  });

  const promises = matchRoutes(routesConfig, req.path).map(
    ({ route: { loadSsrData } }) => loadSsrData && loadSsrData(store)
  );

  await Promise.all(promises);

  const context = {};
  const content = renderer(store, req.path, context);

  if (context.notFound) {
    res.status(404);
  }

  if (context.url) {
    res.status(301).redirect(context.url);
  }

  res.send(content);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
