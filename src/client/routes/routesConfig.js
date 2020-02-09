import Admins from "client/routes/Admins";
import Home from "client/routes/Home";
import App from "client/routes/App";
import NotFound from "client/routes/NotFound";

import requireAuth from "client/components/RequireAuth";

export default [
  {
    component: App,
    loadSsrData: App.loadSsrData,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home
      },
      {
        path: "/admins",
        component: requireAuth(Admins),
        loadSsrData: Admins.loadSsrData
      },
      {
        component: NotFound
      }
    ]
  }
];
