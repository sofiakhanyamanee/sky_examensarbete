import React, { useContext } from "react";
import useAuth from "../../store/actions/auth";
import { Context } from '../../store/Store';
import { WrapperDashboard, SignOutBtn, UserInfo, ProfilePicture, UserHeading} from "../StylingComponents";
import RenderComp from "../User/RenderComp";
  
  export default function UserDashboard() {
  const [state] = useContext(Context);
  const { signout } = useAuth();

  console.log("state" , state)
  function handleLogOut() {
    signout();
  }
  return (
    <WrapperDashboard>
       <UserHeading>Boende</UserHeading>
       <SignOutBtn onClick={handleLogOut}>Logga ut</SignOutBtn>
       <RenderComp/>
       <UserInfo>
        <ProfilePicture>{state.currentUser.name}</ProfilePicture>
      </UserInfo>
    </WrapperDashboard>
  )
}
