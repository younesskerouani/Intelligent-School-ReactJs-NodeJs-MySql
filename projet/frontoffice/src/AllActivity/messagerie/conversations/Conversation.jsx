import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";
import * as UserApi from '../../../ApiRedux/api/UserRequest';

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);

  const members = [conversation.senderId, conversation.receiverId ]

  useEffect(() => {
    const friendId = members.filter((m) => m !== currentUser.id);

    const getUser = async () => {
      try {
        // const res = await axios.get(`http://localhost:8088/api/user/${friendId}`);
        const res = await UserApi.getUserById(friendId);
        setUser(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();

    console.log(friendId);
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={
          user?.photo
            ? process.env.REACT_APP_PUBLIC_IMAGE+ "users/" + user.photo
            : "./images/deafultProfilPic.png"
        }
        alt=""
      />
      <div className="userInfoConv">
        <span className="conversationName">{user?.fullname}</span>
       <span className="conversationRoleUser">{user?.roles}</span>
      </div>
    </div>
  );
}
