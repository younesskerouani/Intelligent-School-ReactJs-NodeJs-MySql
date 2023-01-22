import "./forums.scss";
import { useState , useEffect } from "react";
import {useDispatch  , useSelector} from 'react-redux';
import Posting from "../../components/PostingService/Posting";
import { getAllForums } from "../../../ApiRedux/actions/ForumAction";

const Forums = () => {

  const dispatch = useDispatch();

  const forums = useSelector((state)=>state.forumReducer.forums)

  useEffect(()=> {
    dispatch(getAllForums())
  },[forums])

  console.log(forums);

  return (

      <div className="singleContainer">

          <div className="top">
        
            <div className="datatableTitle">
              FORUMS LIST
              </div>

            <div className="forumList">
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
