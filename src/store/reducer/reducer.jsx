
const Reducer = (state, action) => {

  switch (action.type) {
    case "SIGNED_IN_SUCCESS":
      return {
        ...state,
        currentUser: action.user,
      };

    case "SIGNED_UP_SUCCESS": {
      let user;
      // console.log("signed_up_success");
      // console.log(state.currentUser);
      if (state.currentUser != null) {
        user = state.currentUser;
        user.email = action.email;
        user.firstname = action.firstname;
        user.lastname = action.lastname;
        user.brf = action.brf;
        user.role = action.role;
        user.avatarColor = action.avatarColor;
      } else {
        user = {
          email: action.email,
          firstname: action.firstname,
          lastname: action.lastname,
          brf: action.brf,
          role: action.role,
          avatarColor: action.avatarColor
        };
      }

      return {
        ...state,
        currentUser: user,
      };
    }

    case "LOGGED_IN": {
      if (action.dbData != null) {
        // console.log("logged123");
        // console.log(state.currentUser);
        return {
          ...state,
          isLoggedIn: action.isLoggedIn,
          currentUser: action.dbData,
          isLoading: action.isLoading,
        };
      } else {
        let user;
        // console.log("loggedin");
        // console.log(state.currentUser);
        if (state.currentUser != null) {
          user = state.currentUser;
          user.id = action.userId;
        } else {
          user = {
            id: action.userId
          };
        }
        return {
          ...state,
          isLoggedIn: action.isLoggedIn,
          isLoading: action.isLoading,
          currentUser: user,
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
