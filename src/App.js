import React from "react";
import "./App.css";
import "./Pages/Login/login.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/login.jsx";
import Register from "./Pages/Register/register.jsx";
import FrogetPassword from "./Pages/forgetPassword/forget.jsx";
import resetpassword from "./Pages/ResetPassword/resetPassword.jsx";
import Dashboard from "./Pages/dashboard/dashboard";
import ProtectedRoute from "../src/Components/protectedRouter";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forgetPassword" component={FrogetPassword} />
          <Route path="/resetpassword" component={resetpassword} />
          <ProtectedRoute path="/dashboard" component={Dashboard}></ProtectedRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
