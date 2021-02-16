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
    {console.log("BRF_LISTA: ", brfList)}
    {/* {console.log("från return:" , brfList)}
    {brfList && brfList.map((brf, index) => {
      return (
        <div key={index}>
          <p>{brf.brf}</p>
        </div>
      )
    })} */}

    </>
  );
}

// brfList.map((brf, index) => { return (<div key={index}> <p>{brf}</p> </div>
      // {/* {brfList &&
      //   brfList.map((brf, index) => {
      //     // console.log("members", members)
      //   console.log(brfList)
      //     return (
      //       <div key={index}>
      //         <p>{brf}</p>
      //       </div>
      //     );
      //   })} */}
      // {/* <input /> */}