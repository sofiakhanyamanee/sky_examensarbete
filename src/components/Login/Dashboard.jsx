import React, { useContext } from "react";
import { WrapperDashboard } from "../StylingComponents";
// import useAuth from "../../store/actions/auth";
import { Context } from '../../store/Store';
import AdminDashboard from './AdminDashboard'
import UserDashboard from "./UserDashboard";
export default function Dashboard() {
  // const { signout } = useAuth();
  const [state] = useContext(Context);

  // console.log("state" , state)
  console.log("role:" , state.currentUser.role)
  // function handleLogOut() {
  //   signout();
  // }

  return (
    <WrapperDashboard>
      {state.currentUser.role === 'admin' ? <AdminDashboard/> : 
        state.currentUser.role === 'user' ? <UserDashboard/> : <div>User not valited yet</div>}
      {/* <UserInfo>
        <ProfilePicture></ProfilePicture>
      <h3>Hej {state.currentUser.name}</h3>
      <h4>{state.currentUser.email}</h4>
      </UserInfo>
      <SignOutBtn onClick={handleLogOut}>Logga ut</SignOutBtn> */}
    </WrapperDashboard>
  );
}
