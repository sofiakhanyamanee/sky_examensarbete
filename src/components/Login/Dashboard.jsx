import React from "react";
import { WrapperDashboard } from "../StylingComponents";
import useAuth from "../../store/actions/auth";

export default function Dashboard() {
  const { signout } = useAuth();

  function handleLogOut() {
    signout();
  }

  return (
    <WrapperDashboard>
      <h1>dashboard</h1>
      <button onClick={handleLogOut}>Signo</button>
    </WrapperDashboard>
  );
}
