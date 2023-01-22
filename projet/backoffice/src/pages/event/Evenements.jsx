import "./Event.scss";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { EventItems } from "../../eventData";
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch  , useSelector} from 'react-redux';
import { useState , useEffect } from "react";
import { getAllEvents } from "../../ContextApi/actions/eventsAction";
import EventsCard from "../../components/eventCard/EventsCard";

const Evenements = () => {

  const dispatch = useDispatch();
  const events = useSelector((state)=>state.eventsReducer.events);

  useEffect(()=> {
    dispatch(getAllEvents())
  },[events])


  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar />
          
          <div className="top">

         <div className="datatableTitle">
            Evenements List
            <Link to="/evenements/new" className="link">
              Add New
            </Link>
         </div>

            {events.map((event) =>
               <EventsCard event={event}/>
            )}
            
        
           </div>

      </div>
    </div>
  );
};

export default Evenements;
