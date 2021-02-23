import React, { useContext, useEffect, useState } from "react";
import { WrapperDashboard, SignOutBtn } from "../StylingComponents";
import useAuth from "../../store/actions/auth";
import { Context } from '../../store/Store';
import AdminDashboard from './AdminDashboard'
import UserDashboard from "./UserDashboard";
export default function Dashboard() {
  const { signout, getUserFromDB } = useAuth();
  const [state] = useContext(Context);
  const [isVerified, setIsVerfied] = useState(false);

  // console.log("state" , state)
  // console.log("role:" , state.currentUser.role)
  function handleLogOut() {
    signout();
  }

  useEffect(() => {
    getUserFromDB(state.currentUser.id).then((user) => {
      // console.log("user")
      // console.log(user)
      if (user != null) {
        // console.log("isverfired")
        setIsVerfied(true)
      } else {
        console.log("notverfired")
        setIsVerfied(false)
      }
    })
  }, [])

  return (
    <WrapperDashboard>
      {state.currentUser.role === 'admin' ? <AdminDashboard/> : 
        (state.currentUser.role === 'user' && isVerified) ? <UserDashboard/> 
        : 
        <div>User not validated yet
          <SignOutBtn onClick={handleLogOut}>Logga ut</SignOutBtn>
        </div>}
    </WrapperDashboard>
  );
}
