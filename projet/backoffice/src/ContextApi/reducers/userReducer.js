const userReducer = (
    state = { users: [], loading: false, error: false, uploading: false },
    action
  ) => {
    switch (action.type) {

      // Add new User
      case "UPLOAD_START":
        return { ...state, error: false, loading: true };
      case "UPLOAD_SUCCESS":
        return { ...state, users: [action.data, ...state.users], loading: false, error: false };
      case "UPLOAD_FAIL":
        return { ...state, loading: false, error: true };

      // get Users
      case "RETREIVING_START":
        return { ...state, loading: true, error: false };
      case "RETREIVING_SUCCESS":
        return { ...state, users: action.data, loading: false, error: false };
      case "RETREIVING_FAIL":
        return { ...state, loading: false, error: true };

      default:
        return state;
    }
  };
  
  export default userReducer;