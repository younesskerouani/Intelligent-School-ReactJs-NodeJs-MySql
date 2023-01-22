import * as AuthApi from '../api/AuthRequest';
import * as UserApi from '../api/UserRequest';


export const getAllUsers = () => async(dispatch) => {
    
    dispatch({type: "RETREIVING_START"})
   
    try{
        const data = await UserApi.getAllUsers();
        dispatch({type: "RETREIVING_SUCCESS" , data: data})
    }catch(error){
        console.log(error);
        dispatch({type: "RETREIVING_FAIL"})
    }
    
}

export const getUserById = (id) => async() => {
    return await UserApi.getUserById(id);
}
