import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteEvent } from "../../ContextApi/actions/eventsAction";
import "./EventsCard.css";


export default function EventsCard({event}) {
  const dispatch = useDispatch();
  // const imageAccess = "http://localhost:8088/static/events/";

  const handleDelete = (id) => {
    dispatch(deleteEvent(id));
  };


  return (
    
          <div className="postEvent">
                        <Link to={`/evenements/edit/${event.id}`} style={{ textDecoration: "none" }}>
                            <div className="editButton">Edit</div>
                            </Link>
                            <DeleteIcon onClick={() => handleDelete(event.id)} className="deleteButn"/>
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