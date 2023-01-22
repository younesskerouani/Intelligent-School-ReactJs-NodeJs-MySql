import "./NewForum.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { uploadForumImage } from "../../ContextApi/actions/UploadAction";
import { CreateForum } from "../../ContextApi/actions/ForumAction";
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';


const NewForum = () => {

    const[image, setImage] = useState(null);
    const [titre , setTitre] = useState("");
    const [description , setDescription] = useState("");
    const dispatch = useDispatch();

    const newForum = {
        titre,
        description
    }

    let navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();

        if (image) {
            const data = new FormData();
            const fileName = image.name;
            data.append("name", fileName);
            data.append("image", image);
            newForum.photo = fileName;
            console.log(newForum);
            try{
                dispatch(uploadForumImage(data))
            }catch (error) {
                console.log(error)
            }
        }

        console.log(newForum);
        dispatch(CreateForum(newForum));
        navigate("/forums");
    }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Forum</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img 
              src={
                image
                  ? URL.createObjectURL(image)
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
                  onChange={(e) => setImage(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

                      <div className="formInput">
                        <label>Title</label>
                        <input type="text" name="title" placeholder="title" 
                        onChange={(e) => setTitre(e.target.value)}/>
                      </div>

                      <div className="formInput">
                        <label>Description</label>
                        <input className="descriptioninpt" type="text" name="description" 
                        placeholder="Description" onChange={(e) => setDescription(e.target.value)}/>
                      </div>
                 
              <button type="submit"  > Send </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewForum;
