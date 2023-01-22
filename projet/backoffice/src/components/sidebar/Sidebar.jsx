import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EventIcon from '@mui/icons-material/Event';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ChatIcon from '@mui/icons-material/Chat';
import FestivalIcon from '@mui/icons-material/Festival';

import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useEffect } from "react";
import { logout } from '../../ContextApi/actions/AuthAction';
import { useDispatch , useSelector } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  
  // const { dispatch } = useContext(DarkModeContext);

  const handleLogOut = ()=> {
    dispatch(logout());
  }

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
        <Link to="/" style={{ textDecoration: "none" }}> 
            <li>
              <DashboardIcon className="icon" />
              <span>Home</span>
            </li> 
          </Link>

          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/articles" style={{ textDecoration: "none" }}>
            <li>
              <AssignmentIcon className="icon" />
              <span>Articles</span>
            </li>
          </Link>

          <Link to="/agendas" style={{ textDecoration: "none" }}>
          <li>
            <EventIcon className="icon" />
            <span>Agendas</span>
          </li>
          </Link>

          <Link to="/evenements" style={{ textDecoration: "none" }}>
          <li>
            <FestivalIcon className="icon" />
            <span>Evenements</span>
          </li>
         </Link>
         
          <p className="title">Actuality</p>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <Link to="/messagerie" style={{ textDecoration: "none" }}>
          <li>
            <ChatIcon  className="icon" />
            <span>Messagerie</span> 
          </li>
          </Link>
          <li>
            <InsertChartIcon className="icon" />
            <span>Statistics</span>
          </li>
          <p className="title">SERVICE</p>
          

          <Link to="/forums" style={{ textDecoration: "none" }}>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Forums</span>
          </li>
          </Link>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>

          <Link to="/profil" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <li onClick={handleLogOut}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;
