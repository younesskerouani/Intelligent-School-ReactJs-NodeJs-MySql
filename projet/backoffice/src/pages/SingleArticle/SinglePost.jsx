import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./SinglePost.css";
import { useState , useEffect} from 'react';
import { useSelector } from "react-redux";
import * as ArticleApi from '../../ContextApi/api/ArticleRequest';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from "../../components/navbar/Navbar";


export default function SingleArticle() {

  const user = useSelector((state)=>state.authReducer.authData);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const[article,setArticle] = useState({})
 


  useEffect(() => {
    const getArticle =async() => {
      const {data} = await ArticleApi.getArticleById(id);
      setArticle(data);
      console.log(data);
    };

    getArticle();
  },[id])

 

  return (
    <div className="singlePost">

      <Sidebar/>
      <div className="singlePostWrapper">
       <Navbar />
       
       <div className='singleAtBottom'>
          {article.photo ? 
          <img
              className="singlePostImg"
              src={process.env.REACT_APP_PUBLIC_IMAGE+"articles/"+article.photo}
              alt=""
            /> 
            :
            <img
              className="singlePostImg"
              src="https://www.puratos.fr/content/dam/france/visuel-indisponible.jpg/jcr:content/renditions/cq5dam.web.800.800.jpeg"
              alt=""
            />
              
          }
            <h1 className="singlePostTitle">
              {article.titre}
            </h1>
          
            <p className="singlePostDesc">
              {article.description}
            </p>
       </div>
       

      </div>
    </div>
  );
  
}