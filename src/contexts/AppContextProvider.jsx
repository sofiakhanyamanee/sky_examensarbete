import React, { useState, createContext } from "react";

export const AppContext = createContext({});

export default function AppContextProvider({ children }) {
  const [brfList, setBrfList] = useState([]);


  return (
    <AppContext.Provider value={{ brfList, setBrfList }}>
      {children}
    </AppContext.Provider>
  );
}