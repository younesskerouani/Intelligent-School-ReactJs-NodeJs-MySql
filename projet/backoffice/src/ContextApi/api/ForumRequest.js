import axios from "axios"

const ConnectServer = process.env.REACT_APP_SERVER_CONNECT

const API =axios.create({baseURL: ConnectServer})

export const CreateForum = (data) => API.post('/api/forum',data);
export const getAllForums = () => API.get('/api/allforums');
export const getForumById = (id)=>API.get(`/api/forum/${id}`);
export const deleteForum = (id)=>API.delete(`/api/forum/delete/${id}`);
export const updateForum = (id,data)=> API.put(`/api/forum/update/${id}`, data);
