import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import "./Event.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import {useNavigate, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch , useSelector } from "react-redux";
import { useState } from "react";
import { uploadEventImage } from "../../ContextApi/actions/UploadAction";
import { updateEvent } from "../../ContextApi/actions/eventsAction";

export default function EventEdit() {
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const[image, setImage] = useState(null);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const imageAccess = "http://localhost:8088/static/events/";
  const events = useSelector((state)=>state.eventsReducer.events);

  const [data, setData] = useState(events);
  const [SingleEvent , setSingleEvent] = useState({});

  useEffect(()=>{
    const Event = data.filter((item) => item.id == id);
    setSingleEvent(Event[0]);
  },[id])

  const handleChange = (e) => {
    setSingleEvent({ ...SingleEvent, [e.target.name]: e.target.value });
  };

  console.log(SingleEvent);

  const handleSubmit = (e) => {
    e.preventDefault();

        if (image) {
            const data = new FormData();
            const fileName = image.name;
            data.append("name", fileName);
            data.append("image", image);
            SingleEvent.photo = fileName;
            console.log(SingleEvent);
            try{
                dispatch(uploadEventImage(data))
            }catch (error) {
                console.log(error)
            }
        }

        dispatch(updateEvent(id , SingleEvent));
        navigate("/evenements");
    
  };

  return (
    <div className="container">
      <Sidebar className="sidebar"/>
     <div className="user">
        <Navbar/>

      <div className="userTitleContainer">
         <h1 className="userTitle">Edit Evenement</h1>
    
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
             src={ image ? URL.createObjectURL(image) : imageAccess+SingleEvent.photo }
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{SingleEvent.titre}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Evenement Details</span>
            
            <div className="userShowInfo">
              <span className="userShowInfoTitle">{SingleEvent.description}</span>
            </div>

          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm" onSubmit={handleSubmit}>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Title</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  name="titre"
                  value={SingleEvent.titre}
                  onChange={handleChange}
                />
              </div>
              
              <div className="userUpdateItem">
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  className="userUpdateInput"
                  value={SingleEvent.description}
                  onChange={handleChange}
                />
              </div>
             
            </div>
            
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src={ image ? URL.createObjectURL(image) : imageAccess+SingleEvent.photo }
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" onChange={(e) => setImage(e.target.files[0])} style={{ display: "none" }} />
              </div>
              
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
    </div> 
  );
}
