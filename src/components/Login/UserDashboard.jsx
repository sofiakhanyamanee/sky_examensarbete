import React, { useContext } from "react";
import useAuth from "../../store/actions/auth";
import { Context } from '../../store/Store';
import { WrapperDashboard, SignOutBtn, UserInfo, ProfilePicture, } from "../StylingComponents";
import MemberList from '../User/MemberList'
  
  export default function UserDashboard() {
  const [state] = useContext(Context);
  const { signout } = useAuth();

  console.log("state" , state)
  function handleLogOut() {
    signout();
  }
  return (
    <WrapperDashboard>
       <UserInfo>
        <ProfilePicture></ProfilePicture>
        <h3>{state.currentUser.name}'s dashboard</h3>
      </UserInfo>
       <h1>Boendesida</h1>
       <MemberList/>
       <SignOutBtn onClick={handleLogOut}>Logga ut</SignOutBtn>
    </WrapperDashboard>
  )
}
