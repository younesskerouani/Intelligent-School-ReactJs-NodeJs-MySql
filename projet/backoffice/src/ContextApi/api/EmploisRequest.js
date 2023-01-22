import axios from "axios"

const ConnectServer = process.env.REACT_APP_SERVER_CONNECT

const API =axios.create({baseURL: ConnectServer})

export const CreateEmplois = (data) => API.post('/api/emploi',data);
export const getAllEmplois = () => API.get('/api/allemplois');
export const updateEmplois = (id,data)=> API.put(`/api/emploi/update/${id}`, data);
export const getEmploisById = (id)=>API.get(`/api/emploi/${id}`);
export const deleteEmplois = (id)=>API.delete(`/api/emploi/delete/${id}`);