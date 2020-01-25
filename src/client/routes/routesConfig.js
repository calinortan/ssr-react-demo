import Users from "client/routes/Users";
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
        path: "/users",
        component: Users,
        loadSsrData: Users.loadSsrData
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
