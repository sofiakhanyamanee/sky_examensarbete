import React, { useState } from "react";
import Login from "../components/Login/Login";
import SignUp from "../components/Login/SignUp";
import { WrapperStartPage, LogoHeading, NavBar, ShowLoginBtn, ShowSignUpBtn } from "../components/StylingComponents";

export default function StartPage() {
  let [toggleView, setToggleView] = useState(false)


	function showView(){

    if(toggleView === false) {
      return (<div><Login /></div> )        
    }
    
    if (toggleView === true) {
      return (<div><SignUp /> </div>)
    
    }
  }
  
  return (
      <WrapperStartPage>
        <NavBar>
          <LogoHeading>Startsida</LogoHeading>
          <div>
          <ShowSignUpBtn  onClick={()=>setToggleView(true)}>Skapa konto</ShowSignUpBtn>
          <ShowLoginBtn  onClick={()=>setToggleView(false)}>Logga in</ShowLoginBtn>
          </div>
          
        </NavBar>
        {showView()}
      </WrapperStartPage>
  );
}
