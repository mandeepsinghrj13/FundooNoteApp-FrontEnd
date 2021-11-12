import React from "react";
import "./App.css";
import "./Pages/Login/login.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/login.jsx";
import Register from "./Pages/Register/register.jsx";
import FrogetPassword from "./Pages/forgetPassword/forget.jsx";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forgetPassword" component={FrogetPassword} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
