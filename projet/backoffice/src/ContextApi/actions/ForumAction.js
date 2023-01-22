import * as ForumApi from '../api/ForumRequest';


export const CreateForum = (formData) => async(dispatch) => {
    
    dispatch({type: "UPLOAD_Forum_START"})
   
    try{
       
        const {data} = await ForumApi.CreateForum(formData)
        dispatch({type: "UPLOAD_Forum_SUCCESS" , data: data})

    }catch(error){
        console.log(error);
        dispatch({type: "UPLOAD_Forum_FAIL"})
    }
    
}

export const getAllForums = () => async(dispatch) => {
    dispatch({type: "GET_FORUM_START"})
    try{
        const {data} = await ForumApi.getAllForums();
        dispatch({type: "GET_FORUM_SUCCESS" , data: data})
    }catch(error){
        console.log(error);
        dispatch({type: "GET_FORUM_FAIL"})
    }
    
}

export const getForumById = (id) => async() => {
    const {data} =  await ForumApi.getForumById(id);
    return data;
}

export const updateForum = (id, formData) => async() => {
     await ForumApi.updateForum(id, formData);
}

export const deleteForum = (id) => async() => {
    await ForumApi.deleteForum(id);
}