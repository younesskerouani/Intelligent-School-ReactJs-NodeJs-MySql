import axios from "axios"

const ConnectServer = process.env.REACT_APP_SERVER_CONNECT

const API =axios.create({baseURL: ConnectServer})

export const CreateConversation = (data) => API.post('/api/conversations',data);
export const getConversation = (id) => API.get(`/api/conversations/${id}`);
export const getConversationOfTwoUsers = (userid1, userid2) => API.get(`/api/conversations/${userid1}/${userid2}`);
export const getMessages = (conversationId) => API.get(`/api/messages/${conversationId}`);
export const sendMessages = (message) => API.post("/api/messages",message);