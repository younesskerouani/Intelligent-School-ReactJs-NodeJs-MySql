import "./messagerie.css";
import Conversation from "./conversations/Conversation";
import Navbar from "../../components/navbar/Navbar";
import {useEffect, useRef, useState } from "react";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import Message from "./message/Message";
import { io } from "socket.io-client";
import { useNavigate } from 'react-router-dom';
import * as ConversationApi from '../../ContextApi/api/ConversationRequest';


export default function Messagerie() {
  let navigate = useNavigate();
  const user = useSelector((state)=>state.authReducer.authData);

  const users = useSelector((state)=>state.userReducer.users);
  const [usersdata, setUsersdata] = useState(users.data?.filter((item) => item.id !== user.id));

  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([{}]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const[members ,setMembers] = useState([]);
  const [nextMessage, setNextMessages] =useState([]); 

  const socket = useRef();

  const scrollRef = useRef();

  useEffect(() => {
    socket.current = io(process.env.REACT_APP_SOCKET_CONNECT);
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        conversationId: data.conversationId,
        createdAt: Date.now()
      });
    });

  }, []);


  useEffect(() => {
    console.log(arrivalMessage);

    arrivalMessage &&
     members?.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
      
  }, [arrivalMessage, members]);

  useEffect(() => {
    socket.current.emit("addUser", user.id);
    socket.current.on("getUsers", (users) => {
      // console.log(users);
    });
     
  }, [user]);

// get conversation of two users
  const handleConversation = async(id) =>{
    try {
      // const {data} = await axios.get(
      //   `http://localhost:8088/api/conversations/${user.id}/${id}`
      // );
      const {data} = await ConversationApi.getConversationOfTwoUsers(user.id,id);
      setCurrentChat(data.data);
      
    } catch (err) {
      console.log(err);
    }
  
   }

  useEffect(() => {
    const getConversations = async () => {
      try {
        // const res = await axios.get("http://192.168.1.100:8088/api/conversations/" + user.id);
        const res = await ConversationApi.getConversation(user.id);
        setConversations(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user.id,handleConversation]);


  useEffect(() => {
    const getMessages = async () => {
      try {
        // const res = await axios.get(`http://192.168.1.100:8088/api/messages/${currentChat.id}`);
        const res = await ConversationApi.getMessages(currentChat.id);
        const {data} = res.data;
        setMessages(data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();

  }, [currentChat]);


  const handleSubmit = async (e) => {

    e.preventDefault();
    const message = {
      sender: user.id,
      text: newMessage,
      conversationId: currentChat.id,
    };
   
    const receiverId = members.find(
      (member) => member !== user.id
    );

    socket.current.emit("sendMessage", {
      senderId: user.id,
      receiverId,
      text: newMessage,
      conversationId: currentChat.id
    });

    try {
      // const res = await axios.post("http://192.168.1.100:8088/api/messages", message);
      const res = await ConversationApi.sendMessages(message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

 const handleClick = (c) =>{
   setCurrentChat(c);
   setMembers([c.senderId , c.receiverId]);
 }


 
 console.log(usersdata);


  return (
    <>
    
    <Navbar />
      <div className="messenger">
     
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            {
            conversations.data?.map((c) => 
               <div onClick={() => {handleClick(c)} }>
                <Conversation conversation={c} currentUser={user} />
                </div>    
              )
            }
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages?.map((m) => (
                    <div ref={scrollRef}>
                      <Message message={m} own={m.sender === user.id} currentUser={user} currentChat={currentChat}/>
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            )}
          </div>
        </div>
        <div className="chatOnline">
          
          <div className="chatOnlineWrapper">
              <span className="allUsersDiv">All Users</span>
              <br></br>
           {
              usersdata?.map((user) => 
                    <div className="conversation" onClick={()=>handleConversation(user.id)}>
                    <img
                      className="conversationImg"
                      src={
                        user?.photo
                          ? process.env.REACT_APP_PUBLIC_IMAGE+ "users/"+ user.photo
                          : "./images/deafultProfilPic.png"
                      }
                      alt=""
                    />
                    <div className="userInfoConv">
                      <span className="conversationName">{user?.fullname}</span>
                      <span className="conversationRoleUser">{user?.roles[0].name}</span>
                    </div>
                  </div>
                )
                
            }
          </div>
        </div>
      </div>
      </>
  );
}
