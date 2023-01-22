import * as ForumApi from '../api/ForumRequest';


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
