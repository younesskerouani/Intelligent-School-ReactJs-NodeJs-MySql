import axios from "axios"

// const API =axios.create({baseURL: "http://192.168.43.88:8088"});

const ConnectServer = process.env.REACT_APP_SERVER_CONNECT

const API =axios.create({baseURL: ConnectServer})

export const getAllEvents = () => API.get('/api/allevenements');
export const getEventById = (id)=>API.get(`/api/evenement/${id}`);