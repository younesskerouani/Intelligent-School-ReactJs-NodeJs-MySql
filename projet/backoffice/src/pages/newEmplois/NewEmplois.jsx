import "./NewEmplois.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { uploadEmploisFile } from "../../ContextApi/actions/UploadAction";
import {useDispatch} from 'react-redux';
import {useNavigate, useLocation } from "react-router-dom";
import { CreateEmplois } from "../../ContextApi/actions/EmploisAction";


const NewEmplois = () => {
    const[file, setFile] = useState(null);
    const location = useLocation();
    const profil = location.pathname.split("/")[3];


    let dispatch = useDispatch();

    const newEmplois = {
      profil
    }

  let navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();

    if (file) {
        const data = new FormData();
        const fileName = file.name;
        data.append("name", fileName);
        data.append("file", file);
        newEmplois.file = fileName;
        console.log(newEmplois);
        try{
            dispatch(uploadEmploisFile(data))
        }catch (error) {
            console.log(error)
        }
    }

    console.log(newEmplois);
    dispatch(CreateEmplois(newEmplois));
    navigate("/agendas");
}

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Emplois</h1>
        </div>
        <div className="bottom">
          {/* <div className="left">
            <img 
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div> */}
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput" >
                {/* <label htmlFor="file">
                  Emplois du Temps: <DriveFolderUploadOutlinedIcon className="icon" />
                </label> */}
                <label className="fileEmplois">Emplois du Temps:</label>
                <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} />
              </div>
                 
              <button type="submit"  > Send </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewEmplois;
