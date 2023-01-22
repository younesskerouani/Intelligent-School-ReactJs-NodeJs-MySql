import * as ArticleApi from '../api/ArticleRequest';


export const CreateArticle = (formData) => async(dispatch) => {
    
    dispatch({type: "UPLOAD_Article_START"})
   
    try{
       
        const {data} = await ArticleApi.CreateArticle(formData)
        dispatch({type: "UPLOAD_Article_SUCCESS" , data: data})

    }catch(error){
        console.log(error);
        dispatch({type: "UPLOAD_Article_FAIL"})
    }
    
}

export const getAllArticles = () => async(dispatch) => {
    dispatch({type: "GET_Article_START"})
    try{
        const {data} = await ArticleApi.getAllArticles();
        dispatch({type: "GET_Article_SUCCESS" , data: data})
    }catch(error){
        console.log(error);
        dispatch({type: "GET_Article_FAIL"})
    }
    
}

export const getArticleById = (id) => async() => {
    await ArticleApi.getArticleById(id);
}

export const updateArticle = (id, formData) => async() => {
    await ArticleApi.updateArticle(id, formData);
}


export const deleteArticle = (id) => async() => {
    await ArticleApi.deleteArticle(id);
}