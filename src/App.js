import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import SignUpPage from "./pages/SignUpPage";
import Dashboard from "./components/Login/Dashboard";
import PrivateRoute from "./components/Routes/PrivateRoute";
import LoginPage from "./pages/LoginPage";
import useSession from "./store/Session";
import { useContext } from "react";
import { Context } from "./store/Store";
import PublicRoute from "./components/Routes/PublicRoute";

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

        <Route path="/signup" component={SignUpPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <PrivateRoute
          isLoggedIn={state.isLoggedIn}
          path="/dashboard"
          component={Dashboard}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
