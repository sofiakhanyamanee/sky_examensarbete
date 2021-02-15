import React, { useState } from "react";
import Login from "../components/Login/Login";
import SignUp from "../components/Login/SignUp";
import AdminSignUp from "../components/Login/AdminSignUp";
import {
  WrapperStartPage,
  LogoHeading,
  NavBar,
  ShowLoginBtn,
  ShowSignUpBtn,
  ShowAdminSignUpBtn
} from "../components/StylingComponents";
// import useAuth from '../store/actions/auth'
// import { Context } from '../store/Store';

export default function StartPage() {
  let [toggleLogin, setToggleLogin] = useState(false);
  let [toggleUserSignUp, setToggleUserSignUp] = useState(false);
  let [toggleAdminSignUp, setToggleAdminSignUp] = useState(false);
  // const { signout } = useAuth();
  // const [state] = useContext(Context);

  // console.log("state" , state)
  // function handleLogOut() {
  //   signout();
  // }

  function showView() {


    if (toggleLogin === true) {
      return (
        <div>
          <Login />
        </div>
      );
    }

   if (toggleUserSignUp === true) {
      return (
        <div>
          <SignUp />
        </div>
      );
    }

   if (toggleAdminSignUp === true) {
      return (
        <div>
          <AdminSignUp />
        </div>
      );
    }

  }

  return (
    <WrapperStartPage>
      <NavBar>
        <LogoHeading>Startsida</LogoHeading>
      {/* <button onClick={handleLogOut}>Logga ut</button> */}
        <div>
          <ShowAdminSignUpBtn onClick={() => setToggleAdminSignUp(true)}>
            Skapa styrelse konto
          </ShowAdminSignUpBtn>
          <ShowSignUpBtn onClick={() => setToggleUserSignUp(true)}>
            Skapa boende konto
          </ShowSignUpBtn>
          <ShowLoginBtn onClick={() => setToggleLogin(true)}>
            Logga in
          </ShowLoginBtn>
        </div>
      </NavBar>
      {showView()}
    </WrapperStartPage>
  );
}
