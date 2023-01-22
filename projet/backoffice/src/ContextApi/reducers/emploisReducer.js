const articleReducer = (
    state = { emplois: [], loading: false, error: false},
    action
  ) => {
    switch (action.type) {

      // Add new emplois
      case "UPLOAD_ Emplois_START":
        return { ...state, error: false, loading: true };
      case "UPLOAD_Emplois_SUCCESS":
        return { ...state, emplois: [action.data, ...state.emplois], loading: false, error: false };
      case "UPLOAD_Emplois_FAIL":
        return { ...state, loading: false, error: true };

      // get emplois
      case "GET_Emplois_START":
        return { ...state, loading: true, error: false };
      case "GET_Emplois_SUCCESS":
        return { ...state, emplois: action.data, loading: false, error: false };
      case "GET_Emplois_FAIL":
        return { ...state, loading: false, error: true };
     
      default:
        return state;
    }
  };
  
  export default emploisReducer;