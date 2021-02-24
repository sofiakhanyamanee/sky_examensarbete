import React, { useContext } from "react";
import useAuth from "../../store/actions/auth";
import { Context } from '../../store/Store';
// import RenderComp from "../Admin/RenderComp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { WrapperDashboard, SignOutBtn, AdminHeading, UserInfo } from "../StylingComponents";
import FeedView from "../Admin/FeedView";
import MemberView from "../Admin/MemberView";
import LetterView from "../Admin/LetterView";
import Navbar from '../Styles/Navbar';
  
  export default function AdminDashboard() {
  const [state] = useContext(Context);
  const { signout } = useAuth();
  
  function handleLogOut() {
    signout();
  }
  
  return (
    <BrowserRouter>
        <Navbar/>
        <WrapperDashboard>
          {/* <AdminHeading>Admin</AdminHeading> */}
          <SignOutBtn onClick={handleLogOut}>Logga ut</SignOutBtn>
          {/* <ProfilePicture>{state.currentUser.name}</ProfilePicture> */}
          <UserInfo> 
            <p>{state.currentUser.name}</p>
            <p>{state.currentUser.role}</p>
          </UserInfo>
        </WrapperDashboard> 
      <Switch>
        <Route path='/dashboard' exact component={FeedView} />
        <Route path='/members'  component={MemberView} />
        <Route path='/letters'  component={LetterView} />
      </Switch>
    </BrowserRouter>
  )
}
