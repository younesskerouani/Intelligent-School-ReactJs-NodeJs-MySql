import "./AddCours.css";
import { useState } from "react";
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { uploadCoursFile } from "../../../ApiRedux/actions/UploadAction";
import { CreateCours } from "../../../ApiRedux/actions/CoursActions";
import { useSelector } from "react-redux";


export default function AddCours() {
  const user = useSelector((state)=>state.authReducer.authData);
  const[file, setFile] = useState(null);
  const [titre , setTitre] = useState("");
  const dispatch = useDispatch();
  console.log(user);

  let navigate = useNavigate();

      const newCours = {
        titre
     }


  const handleSubmit = (e)=>{
    e.preventDefault();

    if (file) {
        const data = new FormData();
        const fileName = file.name;
        data.append("name", fileName);
        data.append("cours", file);
        newCours.file = fileName;
        newCours.id_prof = user.id;
        newCours.prof_fullname = user.fullname;
        newCours.prof_photo = user.photo;
        console.log(newCours);
        try{
            dispatch(uploadCoursFile(data))
        }catch (error) {
            console.log(error)
        }
    }

    console.log(newCours);
    dispatch(CreateCours(newCours));
    navigate("/cours");
}

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Cours</h1>
      <form className="addProductForm" onSubmit={handleSubmit}>
        <div className="addProductItem">
          <label>Fichier</label>
          <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="type titre" className="TitleInpt" 
          onChange={(e) => setTitre(e.target.value)}/>
        </div>
        <button className="addProductButton"  type="submit" >Create</button>
      </form>
    </div>
  );
}
