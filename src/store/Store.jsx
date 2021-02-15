import React, { createContext, useReducer } from "react";
import Reducer from "./reducer/reducer";

const initialState = {
  /*
    currentUser: {
        email: sada@dsda.com,
        name: affe,
        id: 2131231,
        role: admin eller user
    }
    */
  currentUser: null,
  isLoggedIn: false,
  isLoading: true,
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
