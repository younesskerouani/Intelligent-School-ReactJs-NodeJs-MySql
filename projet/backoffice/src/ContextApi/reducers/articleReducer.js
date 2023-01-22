const articleReducer = (
    state = { articles: [], loading: false, error: false},
    action
  ) => {
    switch (action.type) {

      // Add new article
      case "UPLOAD_ Article_START":
        return { ...state, error: false, loading: true };
      case "UPLOAD_Article_SUCCESS":
        return { ...state, articles: [action.data, ...state.articles], loading: false, error: false };
      case "UPLOAD_Article_FAIL":
        return { ...state, loading: false, error: true };

      // get articles
      case "GET_Article_START":
        return { ...state, loading: true, error: false };
      case "GET_Article_SUCCESS":
        return { ...state, articles: action.data, loading: false, error: false };
      case "GET_Article_FAIL":
        return { ...state, loading: false, error: true };
     
      default:
        return state;
    }
  };
  
  export default articleReducer;