import React, { useContext } from "react";
import useAuth from "../../store/actions/auth";
import { Context } from '../../store/Store';
import { WrapperDashboard, SignOutBtn} from "../StylingComponents";
  
  export default function UserDashboard() {
  const [state] = useContext(Context);
  const { signout } = useAuth();

  console.log("state" , state)
  function handleLogOut() {
    signout();
  }
  return (
    <WrapperDashboard>
       {/* {state.currentUser.role === 'admin' ? (<h1>Boende inloggad</h1>) : (<h1>Ingen träff</h1>)} */}
       <h1>Boendesida</h1>
       <SignOutBtn onClick={handleLogOut}>Logga ut</SignOutBtn>
    </WrapperDashboard>
  )
}
