const eventsReducer = (
    state = { events: [], loading: false, error: false},
    action
  ) => {
    switch (action.type) {

      // Add new Forum
      case "UPLOAD_EVENT_START":
        return { ...state, error: false, loading: true };
      case "UPLOAD_EVENT_SUCCESS":
        return { ...state, events: [action.data, ...state.events], loading: false, error: false };
      case "UPLOAD_EVENT_FAIL":
        return { ...state, loading: false, error: true };

      // get Users
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