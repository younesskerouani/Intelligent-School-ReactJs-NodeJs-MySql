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
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import SchoolIcon from '@mui/icons-material/School';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useDispatch , useSelector } from "react-redux";
import { logout } from '../../../ApiRedux/actions/AuthAction';

export default function EnseiSidebar() {
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
                    <h3 className="sidebarTitle">List</h3>
                    <ul className="sidebarList">

                     
                            {/* <li className="sidebarListItem">
                                <AssignmentTurnedInIcon className="sidebarIcon" />
                                Circulaire
                            </li> */}
                     
                       <Link to="/Emplois-Enseignant" className="link">
                            <li className="sidebarListItem">
                                <DateRangeIcon className="sidebarIcon" />
                                Emplois du temps
                            </li>
                       </Link>

                        <Link to="/Trombinoscope-eleves" className="link">
                            <li className="sidebarListItem">
                                <SchoolIcon className="sidebarIcon" />
                                trombinoscope-eleve
                            </li>
                        </Link>
                  
                            {/* <li className="sidebarListItem">
                                <BackpackIcon className="sidebarIcon" />
                                Resource Pedagogique
                            </li> */}
                       
                        <li className="sidebarListItem">
                            <PlaylistAddCheckCircleIcon className="sidebarIcon" />
                            Notes & Bulletin
                        </li>

                        <Link to="/evenements" className="link">
                            <li className="sidebarListItem">
                                <FestivalIcon className="sidebarIcon" />
                                Evenements
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Menu</h3>
                    <ul className="sidebarList">
                   
                    <Link to="/cours" className="link">  
                        <li className="sidebarListItem">
                            <InsertDriveFileIcon className="sidebarIcon" />
                            Cours
                        </li>
                     </Link>

                        <Link to="/Articles-eleve" className="link">
                            <li className="sidebarListItem">
                                <ArticleIcon className="sidebarIcon" />
                                Articles
                            </li>
                        </Link>

                        <Link to="/forums" className="link">
                            <li className="sidebarListItem">
                                <DynamicFeed className="sidebarIcon" />
                                Forums
                            </li>
                        </Link>

                        <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon" />
                            Devoirs
                        </li>

                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <Link to="/messagerie" className="link">
                            <li className="sidebarListItem">
                                <ChatBubbleOutline className="sidebarIcon" />
                                Messages
                            </li>
                        </Link>   
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
