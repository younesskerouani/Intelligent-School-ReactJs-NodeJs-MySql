import * as AuthApi from '../api/AuthRequest';
import * as UserApi from '../api/UserRequest';

export const AddUser = (formData) => async(dispatch) => {
    
    dispatch({type: "UPLOAD_START"})
   
    try{
       
        const {data} = await AuthApi.signUp(formData)
        dispatch({type: "UPLOAD_SUCCESS" , data: data})

    }catch(error){
        console.log(error);
        dispatch({type: "UPLOAD_FAIL"})
    }
    
}


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

export const deleteUser = (id) => async() => {
     await UserApi.deleteUser(id)
}

export const getUserById = (id) => async() => {
    return await UserApi.getUserById(id);
}

export const updateUser = (id, formData) => async() => {
     await UserApi.updateUser(id, formData);
}