import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import StartPage from "./pages/StartPage";
import Dashboard from "./components/Login/Dashboard";
import PrivateRoute from "./components/Routes/PrivateRoute";
import useSession from "./store/Session";
import { useContext } from "react";
import { Context } from "./store/Store";
import PublicRoute from "./components/Routes/PublicRoute";
import moment from "moment/locale/sv";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import AdminSignUp from "./components/Login/AdminSignUp";

function App() {
  const [state] = useContext(Context);
  useSession();

  if (state.isLoading) {
    return <p> Loading website...</p>;
  }


  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/" restricted={false} component={StartPage} exact />
        <PublicRoute path='/signup-brf'  component={AdminSignUp} />
        <PublicRoute path='/signup-user'  component={SignUp}/>
        <PublicRoute path='/sign-in'  component={Login}/>
        <PrivateRoute isLoggedIn={state.isLoggedIn} path="/dashboard" component={Dashboard} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
