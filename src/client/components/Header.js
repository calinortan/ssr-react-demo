import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import cx from "classnames";
const Header = () => {
  const isAuthenticated = useSelector(state => !!state.auth);

  const Login = <a href="/api/auth/google">Login</a>;
  const Logout = <a href="/api/logout">Logout</a>;

  const isAdminsRoute = !!useRouteMatch("/admins");
  const isUsersRoute = !!useRouteMatch("/users");

  return (
    <nav>
      <div className="nav-wrapper teal">
        <Link to="/" className="brand-logo left">
          React SSR
        </Link>
        <ul id="nav-mobile" className="right">
          <li className={cx({ active: isUsersRoute })}>
            <Link to="/users">Users</Link>
          </li>
          <li className={cx({ active: isAdminsRoute })}>
            <Link to="/admins">Admins</Link>
          </li>
          <li>{isAuthenticated ? Logout : Login}</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
