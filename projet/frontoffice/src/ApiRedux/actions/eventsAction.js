import * as EventApi from '../api/eventsRequest';


export const getAllEvents = () => async(dispatch) => {
    dispatch({type: "GET_EVENT_START"})
    try{
        const {data} = await EventApi.getAllEvents();
        dispatch({type: "GET_EVENT_SUCCESS" , data: data})
    }catch(error){
        console.log(error);
        dispatch({type: "GET_EVENT_FAIL"})
    }   
}

export const getEventById = (id) => async() => {
    const {data} =  await EventApi.getEventById(id);
    return data;
}
