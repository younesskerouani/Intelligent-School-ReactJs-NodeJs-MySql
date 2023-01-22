import axios from "axios"

// const API =axios.create({baseURL: "http://192.168.43.88:8088"})

const ConnectServer = process.env.REACT_APP_SERVER_CONNECT

const API =axios.create({baseURL: ConnectServer})

export const logIn = (formData)=>API.post('/api/auth/signin', formData)
export const signUp = (formData)=>API.post('/api/auth/signup', formData)
