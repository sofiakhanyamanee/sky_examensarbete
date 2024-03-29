import React, { useContext } from "react";
import useAuth from "../../store/actions/auth";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { WrapperDashboard } from "../StylingComponents";
import FeedView from "../User/FeedView";
import MemberView from "../User/MemberView";
import LetterView from "../User/LetterView";
import Navbar from '../Styles/Navbar';
import { Context } from '../../store/Store';
// import * as AiIcons from 'react-icons/ai';
// import RenderComp from "../User/RenderComp";
  
  export default function UserDashboard() {
  const [state] = useContext(Context);
  const { signout } = useAuth();

  // console.log("state" , state)
  // function handleLogOut() {
  //   signout();
  // }
  return (
    <BrowserRouter>
      <Navbar/>
      <WrapperDashboard>
        {/* <SignOutBtn onClick={handleLogOut}><AiIcons.AiOutlineLogout/></SignOutBtn> */}
        {/* <UserInfo>
        <p>{state.currentUser.name}</p>
        </UserInfo> */}
      </WrapperDashboard> 
      <Switch>
        <Route path='/dashboard' exact component={FeedView} />
        <Route path='/members'  component={MemberView} />
        <Route path='/letters'  component={LetterView} />
      </Switch>
    </BrowserRouter>
  )
}
