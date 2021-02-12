import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import StartPage from "./pages/StartPage";
import Dashboard from "./components/Login/Dashboard";
import PrivateRoute from "./components/Routes/PrivateRoute";
import useSession from "./store/Session";
import { useContext } from "react";
import { Context } from "./store/Store";
import PublicRoute from "./components/Routes/PublicRoute";
// import SignUpPage from "./pages/SignUpPage";
// import LoginPage from "./pages/LoginPage";

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
        <PrivateRoute
          isLoggedIn={state.isLoggedIn}
          path="/dashboard"
          component={Dashboard}
          exact
          />
          {/* <PublicRoute path="/signup" component={SignUpPage} exact />
          <PublicRoute path="/login" component={LoginPage} exact /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
