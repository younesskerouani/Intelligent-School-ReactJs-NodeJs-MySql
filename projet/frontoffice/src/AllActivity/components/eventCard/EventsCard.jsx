import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./EventsCard.css";


export default function EventsCard({event}) {
  
  // const imageAccess = "http://localhost:8088/static/events/";


  return (
    
          <div className="postEvent">
                        
                            <div className="item">
                            <img
                                src={process.env.REACT_APP_PUBLIC_IMAGE+ "events/" + event.photo}
                                alt=""
                                className="postImage"
                            />
                            <div className="postInfos">
                                <p className="itemsTitle">{event.titre}</p>
                                
                                <span className="itemValue">{event.description}</span>
                                
                            </div>

                             </div>
            </div> 
   
  );
}