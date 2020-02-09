import React from "react";
import { useSelector } from "react-redux";
import useStyles from "isomorphic-style-loader/useStyles";
import { getProfile } from "client/selectors";
import Configuration from "client/routes/Home/Dashboard/Configuration";
import style from "./Dashboard.css";

const Dashboard = () => {
  const profile = useSelector(getProfile);

  useStyles(style);

  return (
    <div className={`row ${style.Dashboard}`}>
      <div className={`col s12 m4 l3 center-align row ${style.Sidenav}`}>
        <div className="row valign-wrapper">
          <img
            src={profile.profile_image_url}
            alt=""
            className="circle responsive-img col s4"
          />
          <div className="col s8 left-align">{profile.name}</div>
        </div>
      </div>
      <div className="row col s12 m8 l9">
        <Configuration />
      </div>
    </div>
  );
};

export default Dashboard;
