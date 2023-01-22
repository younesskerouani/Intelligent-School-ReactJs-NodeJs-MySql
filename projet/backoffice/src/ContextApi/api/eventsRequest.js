import axios from "axios"

const ConnectServer = process.env.REACT_APP_SERVER_CONNECT

const API =axios.create({baseURL: ConnectServer})

export const createEvent = (data) => API.post('/api/evenement',data);
export const getAllEvents = () => API.get('/api/allevenements');
export const getEventById = (id)=>API.get(`/api/evenement/${id}`);
export const deleteEvent = (id)=>API.delete(`/api/evenement/delete/${id}`);
export const updateEvent = (id,data)=> API.put(`/api/evenement/update/${id}`, data);