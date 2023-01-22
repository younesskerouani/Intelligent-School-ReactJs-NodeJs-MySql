import axios from "axios";

const ConnectServer = process.env.REACT_APP_SERVER_CONNECT

const API =axios.create({baseURL: ConnectServer})

export const getAllEmplois = () => API.get('/api/allemplois');
export const downloadEmplois = (Fname) => API.get(`/downloadEmplois/${Fname}`);