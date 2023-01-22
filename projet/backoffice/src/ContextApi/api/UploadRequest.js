import axios from "axios"

const ConnectServer = process.env.REACT_APP_SERVER_CONNECT

const API =axios.create({baseURL: ConnectServer})

export const uploadForumImage = (data) => API.post('/api/forum/uploadImg', data);
export const uploadUserImage = (data) => API.post('/api/user/uploadImg', data);
export const uploadEventImage = (data) => API.post('/api/evenement/uploadImg', data);
export const uploadEmploisFile = (data) => API.post('/api/emploi/upload', data);