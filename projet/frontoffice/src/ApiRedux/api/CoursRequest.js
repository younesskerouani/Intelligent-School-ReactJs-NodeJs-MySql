import axios from "axios";

const ConnectServer = process.env.REACT_APP_SERVER_CONNECT

const API =axios.create({baseURL: ConnectServer})

export const CreateCours = (data) => API.post('/api/cours/create',data);
export const getAllCours = () => API.get('/api/allcours');
export const updateCours = (id,data)=> API.put(`/api/cours/update/${id}`, data);
export const deleteCours = (id)=>API.delete(`/api/cours/delete/${id}`);
export const getCoursById = (id) => API.get(`/api/cours/${id}`);
export const downloadCours = (Fname) => API.get(`/downloadCours/${Fname}`);

