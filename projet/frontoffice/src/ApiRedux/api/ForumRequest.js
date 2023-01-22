import axios from "axios"

const ConnectServer = process.env.REACT_APP_SERVER_CONNECT

const API =axios.create({baseURL: ConnectServer})

export const getAllForums = () => API.get('/api/allforums');
export const getForumById = (id)=>API.get(`/api/forum/${id}`);