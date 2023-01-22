import axios from "axios"

const ConnectServer = process.env.REACT_APP_SERVER_CONNECT

const API =axios.create({baseURL: ConnectServer})

export const logIn = (formData)=>API.post('/api/auth/signin', formData);
