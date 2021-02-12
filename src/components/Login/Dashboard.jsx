import React, { useContext } from "react";
import { WrapperDashboard, SignOutBtn, UserInfo, ProfilePicture } from "../StylingComponents";
import useAuth from "../../store/actions/auth";
import { Context } from '../../store/Store';

export default function Dashboard() {
  const { signout } = useAuth();
  const [state] = useContext(Context);

  console.log("state" , state)
  function handleLogOut() {
    signout();
  }

  return (
    <WrapperDashboard>
      <h1>Dashboard</h1>
      <UserInfo>
        <ProfilePicture></ProfilePicture>
      <h3>Hej {state.currentUser.name}</h3>
      <h4>{state.currentUser.email}</h4>
      </UserInfo>
      <SignOutBtn onClick={handleLogOut}>Logga ut</SignOutBtn>
    </WrapperDashboard>
  );
}
