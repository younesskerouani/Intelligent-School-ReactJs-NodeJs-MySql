import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import "./ForumEdit.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import {useNavigate, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch , useSelector } from "react-redux";
import { useState } from "react";
import { uploadForumImage } from "../../ContextApi/actions/UploadAction";
import { updateForum } from "../../ContextApi/actions/ForumAction";

export default function ForumEdit() {
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const[image, setImage] = useState(null);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const forums = useSelector((state)=>state.forumReducer.forums)
  const [data, setData] = useState(forums);
  const [SingleForum , setSingleForum] = useState({});

  console.log(data);

  useEffect(()=>{
    const Forum = data.filter((item) => item.id == id);
    setSingleForum(Forum[0]);
  },[id])

  const handleChange = (e) => {
    setSingleForum({ ...SingleForum, [e.target.name]: e.target.value });
  };

  console.log(SingleForum);
  const imageAccess = "http://localhost:8088/static/forums/";


  const handleSubmit = (e) => {
    e.preventDefault();

        if (image) {
            const data = new FormData();
            const fileName = image.name;
            data.append("name", fileName);
            data.append("image", image);
            SingleForum.photo = fileName;
            console.log(SingleForum);
            try{
                dispatch(uploadForumImage(data))
            }catch (error) {
                console.log(error)
            }
        }

        dispatch(updateForum(id , SingleForum));
        navigate("/forums");
    
  };

  return (
    <div className="container">
      <Sidebar className="sidebar"/>
     <div className="user">
        <Navbar/>

      <div className="userTitleContainer">
         <h1 className="userTitle">Edit Forum</h1>
    
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={ image ? URL.createObjectURL(image) : imageAccess+SingleForum.photo }
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{SingleForum.titre}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Forum Details</span>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{SingleForum.createdAt}</span>
            </div>
            <span className="userShowTitle">Forum Description</span>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">{SingleForum.description}</span>
            </div>

          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm" onSubmit={handleSubmit} >
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Title</label>
                <input
                  type="text"
                  name="titre"
                  value={SingleForum.titre}
                  className="userUpdateInput"
                  onChange={handleChange}
                />
              </div>
              
              <div className="userUpdateItem">
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  value={SingleForum.description}
                  className="ForumUpdateInput"
                  onChange={handleChange}
                />
              </div>
             
            </div>
            
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src={ image ? URL.createObjectURL(image) : imageAccess + SingleForum.photo}
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
