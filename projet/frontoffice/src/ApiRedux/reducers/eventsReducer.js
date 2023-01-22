const eventsReducer = (
    state = { events: [], loading: false, error: false},
    action
  ) => {
    switch (action.type) {



      // get events
      case "GET_EVENT_START":
        return { ...state, loading: true, error: false };
      case "GET_EVENT_SUCCESS":
        return { ...state, events: action.data, loading: false, error: false };
      case "GET_EVENT_FAIL":
        return { ...state, loading: false, error: true };
     
      default:
        return state;
    }
  };
  
  export default eventsReducer;