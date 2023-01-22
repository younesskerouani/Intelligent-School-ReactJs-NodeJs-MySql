import { Server } from "socket.io";

const io = new Server({ 
  cors:{
      origin:"*"
  }
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user?.userId === userId) &&
    users.push({ userId, socketId });
    console.log(users);
};

const removeUser = (socketId) => {
  users = users.filter((user) => user?.socketId !== socketId);
};

const getUser = (userId) => {
  const userfetched = users.find((user) => user?.userId === userId);
  return userfetched;
};


io.on("connection", (socket) => {
  //when ceonnect
  console.log("a user connected.");
  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users); 
  });

  console.log(users);
  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text,conversationId }) => {

    console.log(text);
    console.log(senderId);
    console.log(receiverId);
    console.log(conversationId);

    const userReceiver = getUser(receiverId);
    console.log(userReceiver?.socketId);
    try{
      userReceiver && io.to(userReceiver?.socketId).emit("getMessage", {
        senderId,
        text,
        conversationId
      });
    }catch(err){console.log(err);}
   
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});

io.listen(8000);
