import React from "react";
import Login from "../components/Login/Login";
import SignUp from "../components/Login/SignUp";
import { WrapperStartPage } from "../components/StylingComponents";
import useAuth from "../store/actions/auth";

export default function StartPage() {
  const { signout } = useAuth();

  function handleSignOut(e) {
    signout();
  }

  return (
    <>
      <WrapperStartPage>
        <SignUp />
        <Login />
      </WrapperStartPage>
      <button onClick={() => handleSignOut()}>Logout</button>
    </>
  );
}
