import React, { useContext, useEffect, useState } from "react";
import useAuth from "../../store/actions/auth";
import { Context } from '../../store/Store';
import { WrapperDashboard, SignOutBtn} from "../StylingComponents";
  
  export default function AdminDashboard() {
  const [state] = useContext(Context);
  const { signout, getAllUserFromDB  } = useAuth();
  const [userList, setUserList] = useState([]);
  
  useEffect(() => {
    console.log("Fetch all docs")
    getAllUserFromDB()
    .then(users => {
      setUserList(users);      
    });
  }, [])

  
  function handleLogOut() {
    signout();
  }
  
  return (
    <WrapperDashboard>
       {state.currentUser.role === 'admin' ? (<h1>Adminsida</h1>) : (<h1>Ingen träff</h1>)}
        {userList && userList.map((user, index) => {
          console.log("userlist:", userList)
         return (
          <div key={index}>
            user: {user.name}
          </div>
        )})}
       <SignOutBtn onClick={handleLogOut}>Logga ut</SignOutBtn>
    </WrapperDashboard>
  )
}
