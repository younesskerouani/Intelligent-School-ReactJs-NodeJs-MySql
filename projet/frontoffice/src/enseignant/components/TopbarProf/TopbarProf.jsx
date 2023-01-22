import React from "react";
import "./TopbarProf.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useSelector } from "react-redux";


export default function TopbarProf() {
  const user = useSelector((state)=>state.authReducer.authData);
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">ENSEIGNANT</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={process.env.REACT_APP_PUBLIC_IMAGE+ "users/"+ user.photo} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
