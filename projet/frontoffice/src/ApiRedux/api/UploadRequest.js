import axios from "axios"

const ConnectServer = process.env.REACT_APP_SERVER_CONNECT

const API =axios.create({baseURL: ConnectServer})

export const uploadArticleImage = (data) => API.post('/api/articles/uploadImg', data);
export const uploadCoursFile = (data) => API.post('/api/cours/uploadCours', data);