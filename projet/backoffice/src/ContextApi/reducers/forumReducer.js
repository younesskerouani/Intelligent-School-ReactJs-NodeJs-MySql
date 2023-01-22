const forumReducer = (
    state = { forums: [], loading: false, error: false},
    action
  ) => {
    switch (action.type) {

      // Add new Forum
      case "UPLOAD_Forum_START":
        return { ...state, error: false, loading: true };
      case "UPLOAD_Forum_SUCCESS":
        return { ...state, forums: [action.data, ...state.forums], loading: false, error: false };
      case "UPLOAD_Forum_FAIL":
        return { ...state, loading: false, error: true };

      // get Users
      case "GET_FORUM_START":
        return { ...state, loading: true, error: false };
      case "GET_FORUM_SUCCESS":
        return { ...state, forums: action.data, loading: false, error: false };
      case "GET_FORUM_FAIL":
        return { ...state, loading: false, error: true };
     
      default:
        return state;
    }
  };
  
  export default forumReducer;