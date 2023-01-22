import axios from "axios"

const ConnectServer = process.env.REACT_APP_SERVER_CONNECT

const API =axios.create({baseURL: ConnectServer})

export const getAllUsers = ()=>API.get('/api/allusers');
export const getUserById = (id)=>API.get(`/api/user/${id}`);
export const deleteUser = (id)=>API.delete(`/api/user/delete/${id}`);
export const updateUser = (id,data)=> API.put(`/api/user/update/${id}`, data);