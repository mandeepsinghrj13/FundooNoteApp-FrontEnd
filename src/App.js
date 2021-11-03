import React from "react";
import "./App.css";
import "./Pages/Login/login.scss";
import { Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/login.jsx";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </>
  );
}

export default App;
