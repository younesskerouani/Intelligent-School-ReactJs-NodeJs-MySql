import "./Event.scss";
import { Link } from "react-router-dom";
import {useDispatch  , useSelector} from 'react-redux';
import { useState , useEffect } from "react";
import { getAllEvents } from "../../../ApiRedux/actions/eventsAction";
import EventsCard from "../../components/eventCard/EventsCard";

const Evenements = () => {

  const dispatch = useDispatch();
  const events = useSelector((state)=>state.eventsReducer.events);

  useEffect(()=> {
    dispatch(getAllEvents())
  },[events])


  return (

      <div className="singleContainer">
  
          <div className="top">

            <div className="datatableTitle">
                Evenements List
            </div>

            <div className="EventList">
                {events.map((event) =>
                  <EventsCard event={event}/>
                )}
            </div>
        
           </div>

      </div>
  );
};

export default Evenements;
