import "./sidebar.css";
import {
  LineStyle,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import DateRangeIcon from '@mui/icons-material/DateRange';
import ArticleIcon from '@mui/icons-material/Article';
import BackpackIcon from '@mui/icons-material/Backpack';
import FestivalIcon from '@mui/icons-material/Festival';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { logout } from '../../../ApiRedux/actions/AuthAction';
import { useDispatch , useSelector } from "react-redux";

export default function Sidebar() {
  const dispatch = useDispatch();

  const handleLogOut = ()=> {
    dispatch(logout());
  }

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Cartable Numerique</h3>
          <ul className="sidebarList">
            {/* <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link> */}
            <Link to="/emplois" className="link">
              <li className="sidebarListItem">
                <DateRangeIcon className="sidebarIcon" />
                Emplois du temps
              </li>
            </Link>
            <Link to="/cours-student" className="link">
              <li className="sidebarListItem">
                <BackpackIcon className="sidebarIcon" />
                Resource Pedagogique
              </li>
            </Link>
            <li className="sidebarListItem">
            <Link to="/bulletin" className="link">
              <PlaylistAddCheckCircleIcon className="sidebarIcon" />
                Notes & Bulletin
             </Link>   
            </li>
            <li className="sidebarListItem">
              <Link to="/evenements-student" className="link">
                <FestivalIcon className="sidebarIcon" />
                Evenements
                </Link> 
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              
              <Link to="/articles" className="link">
                  <ArticleIcon className="sidebarIcon" />
                    Articles
              </Link>    
            </li>
            
            <li className="sidebarListItem">
            <Link to="/forums-student" className="link"> 
              <DynamicFeed className="sidebarIcon" />
              Forums
             </Link>    
            </li>

            <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Devoirs
              </li>
            
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
          <li className="sidebarListItem">
             <Link to="/messagerie-student" className="link"> 
                <ChatBubbleOutline className="sidebarIcon" />
                Messages
                </Link>    
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
            <li className="sidebarListItem" onClick={handleLogOut}>
              <ExitToAppIcon className="sidebarIcon" />
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
