import "./posting.css";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteForum } from "../../ContextApi/actions/ForumAction";
import { useDispatch } from "react-redux";


export default function Posting({post}) {
  const dispatch = useDispatch();
  const imageAccess = "http://localhost:8088/static/forums/";

  const handleDelete = (id) => {
    dispatch(deleteForum(id));
  };


  return (
    <div className="post">
            <Link to={`/forums/edit/${post.id}`} style={{ textDecoration: "none" }}>
                <div className="editButton">Edit</div>
                </Link>
                <DeleteIcon onClick={() => handleDelete(post.id)} className="deleteBtn"/>
      
       <img
          className="postImg"
          src={post.photo ? imageAccess + post.photo : ""}
          alt=""
        />
       

      <div className="postInfo">
       
        {/* <Link to={`/post/${post.postId}`} className="link"> */}
        <span className="postTitle">{post.titre}</span>
        {/* </Link> */}
        
        {/* <span className="postDate">{new Date(post.createdAt).toDateString}</span> */}
      </div>
    </div>
  );
}