import "./message.css";
import { format } from "timeago.js";
import { useEffect, useState } from "react";
import * as UserApi from '../../../ApiRedux/api/UserRequest';

export default function Message({ message, own , currentUser,currentChat }) {
  const [user, setUser] = useState(null);
  const members = [currentChat.senderId, currentChat.receiverId ];

  useEffect(() => {
      const friendId = members.filter((m) => m !== currentUser.id);
      const getUser = async () => {
        try {
        
          const res = await UserApi.getUserById(friendId);
          setUser(res.data);
          console.log(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getUser();

      console.log(friendId);
  }, [currentUser, currentChat]);
  
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src={own ? process.env.REACT_APP_PUBLIC_IMAGE+ "users/"+ currentUser.photo : process.env.REACT_APP_PUBLIC_IMAGE+ "users/"+ user?.photo}
          alt=""
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}
