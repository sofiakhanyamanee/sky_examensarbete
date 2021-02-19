import React, { useContext } from "react";
import useAuth from "../../store/actions/auth";
import { Context } from '../../store/Store';
import RenderComp from "../Admin/RenderComp";
import { WrapperDashboard, SignOutBtn, UserInfo, ProfilePicture, AdminHeading } from "../StylingComponents";
  
  export default function AdminDashboard() {
  const [state] = useContext(Context);
  const { signout } = useAuth();
  
  function handleLogOut() {
    signout();
  }
  
  return (
    <WrapperDashboard>
      <AdminHeading>Admin</AdminHeading>
       <SignOutBtn onClick={handleLogOut}>Logga ut</SignOutBtn>
      <RenderComp/>
      <UserInfo>
        <ProfilePicture>{state.currentUser.name}</ProfilePicture>
      </UserInfo>
    </WrapperDashboard>
  )
}
