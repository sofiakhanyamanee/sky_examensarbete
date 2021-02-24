import React, { useContext, useEffect } from "react";
import { database } from "../firebase";
import { AppContext } from "../contexts/AppContextProvider";

export default function InputSearchBrf() {
  const { brfList, setBrfList } = useContext(AppContext);



    useEffect(() => {

      // const unsubscribe = 
      database
      .collection("users")
      .where("role", "==", "admin")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map(doc => doc.data().brf);
        setBrfList(data);
      })
      .catch((error) => {
        console.log("Error getting doc", error);
      });
      
      // return () => unsubscribe();
    }, [])
  

    
  return (
    <>
    </>
  );
}
