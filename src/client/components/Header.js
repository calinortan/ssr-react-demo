import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import cx from "classnames";
import { isAuthenticated } from "client/selectors";

const Header = () => {
  const isLoggedIn = useSelector(isAuthenticated);

  const Login = <a href="/api/auth">Login</a>;
  const Logout = <a href="/api/auth/logout">Logout</a>;

  const isAdminsRoute = !!useRouteMatch("/admins");

  return (
    <nav>
      <div className="nav-wrapper deep-purple">
        <Link to="/" className="brand-logo left">
          Twitter-Follower
        </Link>
        <ul id="nav-mobile" className="right">
          <li className={cx({ active: isAdminsRoute })}>
            <Link to="/admins">Admins</Link>
          </li>
          <li>{isLoggedIn ? Logout : Login}</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
