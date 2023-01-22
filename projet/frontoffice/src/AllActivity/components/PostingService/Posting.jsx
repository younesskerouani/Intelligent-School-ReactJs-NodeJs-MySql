import "./posting.css";


export default function Posting({post}) {

  // const imageAccess = "http://localhost:8088/static/forums/";


  return (
    <div className="post">
      
       <img
          className="postImg"
          src={post.photo ? process.env.REACT_APP_PUBLIC_IMAGE +"forums/"+ post.photo : ""}
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