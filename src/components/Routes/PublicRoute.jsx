import React from "react";
import { Route, Redirect } from "react-router-dom";

import {useContext} from "react";
import { Context } from "../../store/Store";

export default function PublicRoute({ component: Component, restricted, ...rest }) {
  const [ state ] = useContext(Context);

  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        state.currentUser && state.isLoggedIn && !restricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
