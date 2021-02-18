import React, { useContext } from "react";
import useAuth from "../../store/actions/auth";
import { Context } from '../../store/Store';
import MemberView from "../Admin/MemberView";
import { WrapperDashboard, SignOutBtn, UserInfo, ProfilePicture, AdminHeading } from "../StylingComponents";
  
  export default function AdminDashboard() {
  const [state] = useContext(Context);
  const { signout } = useAuth();
  
  function handleLogOut() {
    signout();
  }
  
  return (
    <WrapperDashboard>
      <UserInfo>
        <ProfilePicture></ProfilePicture>
        <h3>{state.currentUser.name}'s dashboard</h3>
      </UserInfo>
      <AdminHeading>Admin</AdminHeading>
      <MemberView/>
       <SignOutBtn onClick={handleLogOut}>Logga ut</SignOutBtn>
    </WrapperDashboard>
  )
}
