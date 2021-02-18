
const Reducer = (state, action) => {

  switch (action.type) {
    case "SIGNED_IN_SUCCESS":
      return {
        ...state,
        currentUser: action.user,
      };

    case "SIGNED_UP_SUCCESS": {
      let user;
      if (state.currentUser != null) {
        user = state.currentUser;
        user.email = action.email;
        user.name = action.userName;
        user.brf = action.brf;
        user.role = action.role;
      } else {
        user = {
          email: action.email,
          name: action.userName,
          brf: action.brf,
          role: action.role,
        };
      }

      return {
        ...state,
        currentUser: user,
      };
    }

    case "LOGGED_IN": {
      if (action.dbData != null) {
        return {
          ...state,
          isLoggedIn: action.isLoggedIn,
          currentUser: action.dbData,
          isLoading: action.isLoading,
        };
      } else {
        return {
          ...state,
          isLoggedIn: action.isLoggedIn,
          isLoading: action.isLoading,
        };
      }
    }
    
    case "SIGNED_OUT":
      return {
        ...state,
        currentUser: null,
        isLoggedIn: false,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

export default Reducer;
