import React, {useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "../../store/Store";

export default function PrivateRoute({ isLoggedIn, component: Component, ...rest }) {
  const [ state ] = useContext(Context);

  return (
    <Route
      {...rest}
      render={(props) =>
        state.currentUser && state.isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    ></Route>
  );
}
