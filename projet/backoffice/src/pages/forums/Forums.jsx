import "./forums.scss";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import {useDispatch  , useSelector} from 'react-redux';
import { ForumItems } from "../../eventData";
import Sidebar from "../../components/sidebar/Sidebar";
import Posting from "../../components/PostingService/Posting";
import { getAllForums } from "../../ContextApi/actions/ForumAction";

const Forums = () => {

  const dispatch = useDispatch();

  const forums = useSelector((state)=>state.forumReducer.forums)

  useEffect(()=> {
    dispatch(getAllForums())
  },[forums])

  console.log(forums);

  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar />
          <div className="top">
        
            <div className="datatableTitle">
              Forums List
              <Link to="/forums/new" className="link">
                Add New
              </Link>
          </div>

            {
              forums.map((forum) => 
              <Posting post={forum}/>
              )
            }
        
           </div>

      </div>
    </div>
  );
};

export default Forums;
