import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish 
} from "@material-ui/icons";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import "./user.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import {useNavigate, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch , useSelector } from "react-redux";
import { useState } from "react";
import { updateUser } from '../../ContextApi/actions/UsersAction';
import { uploadUserImage } from "../../ContextApi/actions/UploadAction";


export default function User() {
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const [Roles,setRoles] = useState([""]);

  const users = useSelector((state)=>state.userReducer.users);
  const [data, setData] = useState(users.data);
  const [USER, setUSER] = useState({});
 
  const [uploaded, setUploaded] = useState(false);

  const [file, setFile] = useState(null);
  const dispatch = useDispatch();


  let navigate = useNavigate();
  
    useEffect(()=>{
      const SingleUser = data.filter((item) => item.id == id);
      setUSER(SingleUser[0]);
      
    },[id])


    console.log(USER);
    const role = USER.roles;
    console.log(role);

   
    const handleChange = (e) => {
      setUSER({ ...USER, [e.target.name]: e.target.value });
    };

    const handleRole = (e)=>{
      setRoles([e.target.value]);
      setUSER({ ...USER, roles: Roles });
    }
  


    const handleSubmit = (e) => {
      e.preventDefault();
    
      if (file) {
        const data = new FormData();
        const fileName = file.name;
        data.append("name", fileName);
        data.append("image", file);
        USER.photo = fileName;
        console.log(USER);
        try{
            dispatch(uploadUserImage(data))
        }catch (error) {
            console.log(error)
        }
    }

    console.log(USER);
    dispatch(updateUser(id , USER));
    navigate("/users");

 };


  return (
    <div className="container">
      <Sidebar className="sidebar"/>
     <div className="user">
        <Navbar/>

      <div className="userTitleContainer">
         <h1 className="userTitle">Edit User</h1>
    
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            
            <img
              src={process.env.REACT_APP_PUBLIC_IMAGE+"users/"+USER.photo}
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{USER.fullname}</span>
              {USER.roles?.map((role)=> 
                 <span className="userShowUserTitle">{role.name}</span>
                  )}
              
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{USER.username}</span>
            </div>
            <div className="userShowInfo">
              <FmdGoodIcon className="userShowIcon" />
              <span className="userShowInfoTitle">{USER.adresse}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{USER.phone}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{USER.email}</span>
            </div>

          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm" onSubmit={handleSubmit}>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="JaneDoe99"
                  className="userUpdateInput"
                  name = "username"
                  value = {USER.username}
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="userUpdateInput"
                  name="fullname"
                  value = {USER.fullname}
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="janedoe@gmail.com"
                  className="userUpdateInput"
                  name = "email"
                  value = {USER.email}
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+212 634 567 891"
                  className="userUpdateInput"
                  name = "phone"
                  value = {USER.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="casablanca | Morocco"
                  className="userUpdateInput"
                  name="adresse"
                  value = {USER.adresse}
                  onChange={handleChange}
                />
              </div>
            </div>
           <div className="UpdateMedium">
            <select name="profil" className="SelectProfil"  onChange={handleRole}>
                      <option disabled selected>
                          Profil
                      </option>
                          <option value="directeur">Directeur</option>
                          <option value="enseignant">Enseignant</option>
                          <option value="secretaire">Secrétaire</option>
                          <option value="surveillant">Surveillant général</option>
                          <option value="infirmier">Infirmier</option>
                          <option value="etudiant">Etudiant</option>
                          <option value="parent">Parent</option>
                </select>
           </div>
            
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
      
                 <img 
                 className="userUpdateImg"
                  src={
                    file
                      ? URL.createObjectURL(file)
                      : process.env.REACT_APP_PUBLIC_IMAGE+"users/"+USER.photo
                  }
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} style={{ display: "none" }} />
              </div>
              
              <button className="userUpdateButton" type="submit">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
    </div> 
  );
}
