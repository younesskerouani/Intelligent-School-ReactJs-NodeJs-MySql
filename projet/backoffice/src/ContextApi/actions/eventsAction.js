import * as EventApi from '../api/eventsRequest';

export const createEvent = (formData) => async(dispatch) => {
    
    dispatch({type: "UPLOAD_EVENT_START"})
   
    try{
       
        const {data} = await EventApi.createEvent(formData)
        dispatch({type: "UPLOAD_EVENT_SUCCESS" , data: data})

    }catch(error){
        console.log(error);
        dispatch({type: "UPLOAD_EVENT_FAIL"})
    }
    
}

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

export const updateEvent = (id, formData) => async() => {
     await EventApi.updateEvent(id, formData);
}

export const deleteEvent = (id) => async() => {
    await EventApi.deleteEvent(id);
}