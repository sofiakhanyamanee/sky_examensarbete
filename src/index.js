import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Store from "./store/Store";
import AppContextProvider from "./contexts/AppContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Store>
  </React.StrictMode>,
  document.getElementById("root")
);
