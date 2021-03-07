import React, { useEffect, useState, createContext } from "react";
import { database } from '../firebase'

export const AppContext = createContext({});

export default function AppContextProvider({ children }) {
  const [brfList, setBrfList] = useState([]);

  useEffect(() => {
    database.collection("brf").get().then((querySnapshot) => {
      let brfArr = []
      querySnapshot.forEach((doc) => {
        brfArr.push(doc.id)
      });
      setBrfList(brfArr);
  });
  }, [])

  return (
    <AppContext.Provider value={{ brfList, setBrfList }}>
      {children}
    </AppContext.Provider>
  );
}