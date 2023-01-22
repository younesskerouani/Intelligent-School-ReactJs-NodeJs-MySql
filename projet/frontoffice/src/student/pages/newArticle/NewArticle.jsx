import "./newArticle.css";
import { useState } from "react";
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { uploadArticleImage } from "../../../ApiRedux/actions/UploadAction";
import { CreateArticle } from "../../../ApiRedux/actions/ArticleAction";
import { useSelector } from "react-redux";


export default function NewArticle() {
  const user = useSelector((state)=>state.authReducer.authData);
  const[file, setFile] = useState(null);
  const [titre , setTitre] = useState("");
  const [description , setDescription] = useState("");
  const dispatch = useDispatch();
  console.log(user);

  let navigate = useNavigate();

      const newArticle = {
        titre,
        description
     }


  const handleSubmit = (e)=>{
    e.preventDefault();

    if (file) {
        const data = new FormData();
        const fileName = file.name;
        data.append("name", fileName);
        data.append("image", file);
        newArticle.photo = fileName;
        newArticle.status = "pending";
        newArticle.id_user = user.id;
        newArticle.user_fullname = user.fullname;
        newArticle.user_photo = user.photo;
        console.log(newArticle);
        try{
            dispatch(uploadArticleImage(data))
        }catch (error) {
            console.log(error)
        }
    }

    console.log(newArticle);
    dispatch(CreateArticle(newArticle));
    navigate("/articles");
}

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Article</h1>
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
        <div className="addProductItem">
          <label>description</label>
          <input type="text" placeholder="type Description" className="descriptionInpt"
          onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button className="addProductButton"  type="submit" >Create</button>
      </form>
    </div>
  );
}
