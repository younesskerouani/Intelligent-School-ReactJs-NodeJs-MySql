import * as EmploisApi from '../api/EmploisRequest';


export const getAllEmplois = () => async(dispatch) => {
    dispatch({type: "GET_Emplois_START"})
    try{
        const {data} = await EmploisApi.getAllEmplois();
        dispatch({type: "GET_Emplois_SUCCESS" , data: data})
    }catch(error){
        console.log(error);
        dispatch({type: "GET_Emplois_FAIL"})
    }
    
}