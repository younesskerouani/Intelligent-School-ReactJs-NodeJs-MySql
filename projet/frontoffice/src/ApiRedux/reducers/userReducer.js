const userReducer = (
    state = { users: [], loading: false, error: false, uploading: false },
    action
  ) => {
    switch (action.type) {

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