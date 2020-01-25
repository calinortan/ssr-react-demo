import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAdmins } from "client/actions";
import { Helmet } from "react-helmet-async";

const Admins = () => {
  const dispatch = useDispatch();
  const admins = useSelector(state => state.admins);

  useEffect(() => {
    dispatch(fetchAdmins());
  }, []);

  return (
    <>
      <Helmet>
        <title>{`${admins.length} admins loaded`}</title>
        <meta property="og:title" content="SSR App - Admins" />
      </Helmet>
      <h4>Our List of Admins:</h4>
      <ul className="collection">
        {admins.map(u => (
          <li key={u.id} className="collection-item">
            {u.name}
          </li>
        ))}
      </ul>
    </>
  );
};

Admins.loadSsrData = store => store.dispatch(fetchAdmins());

export default Admins;
