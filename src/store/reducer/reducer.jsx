const Reducer = (state, action) => {
  // console.log(state);
  switch (action.type) {
    case "SIGNED_IN_SUCCESS":
      // console.log("signed_in_success");
      // console.log(action);
      return {
        ...state,
        currentUser: action.user,
      };
    case "SIGNED_UP_SUCCESS": {
      // console.log("signed_up_success");
      // console.log(action);
      // console.log(state.currentUser);
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
          role: action.role
        };
      }

      return {
        ...state,
        currentUser: user,
      };
    }
    case "LOGGED_IN": {
      // console.log("logged_in");
      // console.log(action);
      // console.log(state.currentUser);
      if (action.dbData != null) {
        return {
          ...state,
          isLoggedIn: action.isLoggedIn,
          currentUser: action.dbData,
          isLoading: action.isLoading,
          // role: action.role
        };
      } else {
        return {
          ...state,
          isLoggedIn: action.isLoggedIn,
          isLoading: action.isLoading,
          // role: action.role
        };
      }
    }
    case "SIGNED_OUT":
      // console.log("signing out");
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
