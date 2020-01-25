import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsersAction } from "client/actions";
import { Helmet } from "react-helmet-async";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsersAction());
  }, []);

  return (
    <>
      <Helmet>
        <title>{`${users.length} users loaded`}</title>
        <meta property="og:title" content="SSR App - Users" />
      </Helmet>
      <h4>Our List of Users:</h4>
      <ul className="collection">
        {users.map(u => (
          <li key={u.id} className="collection-item">
            {u.name}
          </li>
        ))}
      </ul>
    </>
  );
};

Users.loadSsrData = store => store.dispatch(fetchUsersAction());

export default Users;
