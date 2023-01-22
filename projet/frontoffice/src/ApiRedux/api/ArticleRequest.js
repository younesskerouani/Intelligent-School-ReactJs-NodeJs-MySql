import axios from "axios"

const ConnectServer = process.env.REACT_APP_SERVER_CONNECT

const API =axios.create({baseURL: ConnectServer})

export const CreateArticle = (data) => API.post('/api/article',data);
export const getAllArticles = () => API.get('/api/allarticles');
export const getArticleById = (id)=>API.get(`/api/article/${id}`);
export const updateArticle = (id,data)=> API.put(`/api/article/update/${id}`, data);
export const deleteArticle = (id)=>API.delete(`/api/article/delete/${id}`);
