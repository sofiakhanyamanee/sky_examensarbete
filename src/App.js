import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import StartPage from "./pages/StartPage";
import Dashboard from "./components/Login/Dashboard";
import PrivateRoute from "./components/Routes/PrivateRoute";
import useSession from "./store/Session";
import { useContext } from "react";
import { Context } from "./store/Store";
import PublicRoute from "./components/Routes/PublicRoute";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import AdminSignUp from "./components/Login/AdminSignUp";
import StartPageNavbar from "./components/StartPageNavbar";
import { Container, Wrapper } from './components/Styles/Loader'
import { DotLoader } from 'react-spinners'
// import moment from "moment/locale/sv";

function App() {
  const [state] = useContext(Context);
  useSession();

  if (state.isLoading) {
    return (<Container> 
              <Wrapper>
                <DotLoader color="#CDE4E2"/>
              </Wrapper>
            </Container>)
  }


  return (
    <BrowserRouter>
      {!state.currentUser && !state.isLoggedIn ? <StartPageNavbar/> : ""} 
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
