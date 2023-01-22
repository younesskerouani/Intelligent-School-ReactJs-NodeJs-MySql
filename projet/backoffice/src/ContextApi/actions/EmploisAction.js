import * as EmploisApi from '../api/EmploisRequest';


export const CreateEmplois = (formData) => async(dispatch) => {
    
    dispatch({type: "UPLOAD_Emplois_START"})
   
    try{
       
        const {data} = await EmploisApi.CreateEmplois(formData)
        dispatch({type: "UPLOAD_Emplois_SUCCESS" , data: data})

    }catch(error){
        console.log(error);
        dispatch({type: "UPLOAD_Emplois_FAIL"})
    }
    
}

export const getAllEmploiss = () => async(dispatch) => {
    dispatch({type: "GET_Emplois_START"})
    try{
        const {data} = await EmploisApi.getAllEmplois();
        dispatch({type: "GET_Emplois_SUCCESS" , data: data})
    }catch(error){
        console.log(error);
        dispatch({type: "GET_Emplois_FAIL"})
    }
    
}

export const updateEmplois = (id, formData) => async() => {
    await EmploisApi.updateEmplois(id, formData);
}

export const deleteEmplois = (id) => async() => {
    await EmploisApi.deleteEmplois(id);
}