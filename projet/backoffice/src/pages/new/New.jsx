import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { AddUser } from '../../ContextApi/actions/UsersAction';
import { useNavigate } from 'react-router-dom';
import { uploadUserImage } from "../../ContextApi/actions/UploadAction";


const New = ({ inputs, title }) => {
  const [file, setFile] = useState(null);
  const [roles,setRoles] = useState([""]);
  const dispatch = useDispatch();

  // const uploading = useSelector((state)=>state.userReducer.uploading);

  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [adresse, setAdresse] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const NewProfil = {
    username,
    fullname,
    adresse,
    phone,
    email,
    password,
    roles
  }


  const handleRole = (e)=>{
    setRoles([e.target.value]);
  }

  
  console.log(NewProfil);


 
const handleSubmit = (e)=>{
  e.preventDefault();

  if (file) {
      const data = new FormData();
      const fileName = file.name;
      data.append("name", fileName);
      data.append("image", file);
      NewProfil.photo = fileName;
      console.log(NewProfil);
      try{
          dispatch(uploadUserImage(data))
      }catch (error) {
          console.log(error)
      }
  }

  console.log(NewProfil);
  dispatch(AddUser(NewProfil));
  navigate("/users");

}


  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img 
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput" >
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input 
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              <div className="formInput">
                      <label>Username</label>
                      <input  type= "text"
                              name="username"
                              placeholder= "enter username" 
                              value = {username}
                              onChange={(e)=>setUsername(e.target.value)}/>
                </div>

                <div className="formInput"> 
                    <label>Full Name</label>
                    <input  type= "text"
                            name="fullname"
                            placeholder= "enter Name and Surname"
                            value = {fullname}
                            onChange={(e) => setFullname(e.target.value)} />
                  </div>

                  <div className="formInput"> 
                    <label>Address</label>
                    <input  type= "text"
                            name="adresse"
                            placeholder= "enter addresse" 
                            value = {adresse}
                            onChange={(e)=>setAdresse(e.target.value)}/> 
                  </div>

                  <div className="formInput">
                    <label>Phone</label>
                    <input  type= "text"
                            name="phone"
                            placeholder= "enter Phone number"
                            value = {phone}
                            onChange={(e)=>setPhone(e.target.value)}/>         
                  </div>

                  <div className="formInput">
                    <label>Email</label>
                    <input  type= "mail"
                            name="email"
                            placeholder= "enter Email"
                            value = {email} 
                            onChange={(e)=>setEmail(e.target.value)}/>
                  </div>

                  <div className="formInput">
                    <label>Password</label>
                    <input  type= "password"
                            name="password"
                            placeholder= "enter Password"
                            value = {password} 
                            onChange={(e)=>setPassword(e.target.value)}/>        
                  </div>

                
                <div className="formInput">
                    <select name="roles" className="SelectProfil" onChange={handleRole}>
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
                  
              <button type="submit"  > Send </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
