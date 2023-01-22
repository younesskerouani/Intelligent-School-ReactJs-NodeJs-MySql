import * as CoursApi from '../api/CoursRequest';


export const CreateCours = (formData) => async(dispatch) => {
    
    dispatch({type: "UPLOAD_Cours_START"})
   
    try{
       
        const {data} = await CoursApi.CreateCours(formData)
        dispatch({type: "UPLOAD_Cours_SUCCESS" , data: data})

    }catch(error){
        console.log(error);
        dispatch({type: "UPLOAD_Cours_FAIL"})
    }
    
}

export const getAllCours = () => async(dispatch) => {
    dispatch({type: "GET_Cours_START"})
    try{
        const {data} = await CoursApi.getAllCours();
        dispatch({type: "GET_Cours_SUCCESS" , data: data})
    }catch(error){
        console.log(error);
        dispatch({type: "GET_Cours_FAIL"})
    }
    
}

export const updateCours = (id, formData) => async() => {
    await CoursApi.updateCours(id, formData);
}


export const deleteCours = (id) => async() => {
    await CoursApi.deleteCours(id);
}