const coursReducer = (
    state = { cours: [], loading: false, error: false},
    action
  ) => {
    switch (action.type) {

      // Add new cours
      case "UPLOAD_ Cours_START":
        return { ...state, error: false, loading: true };
      case "UPLOAD_Cours_SUCCESS":
        return { ...state, cours: [action.data, ...state.cours], loading: false, error: false };
      case "UPLOAD_Cours_FAIL":
        return { ...state, loading: false, error: true };

      // get cours
      case "GET_Cours_START":
        return { ...state, loading: true, error: false };
      case "GET_Cours_SUCCESS":
        return { ...state, cours: action.data, loading: false, error: false };
      case "GET_Cours_FAIL":
        return { ...state, loading: false, error: true };
     
      default:
        return state;
    }
  };
  
  export default coursReducer;