import React from "react";
import Login from "./Login";
import Register from './Register';
import ForgotPassword from './ForgotPassword';



import {
  Switch,
  Route,
  Link,
  Redirect,
 
} from "react-router-dom";

export default function Auth() {
  return (
    <>
      <Switch>
        <Redirect exact from="/auth" to="/auth/login" />
        <Route path="/auth/login">
          <Login />
         
        </Route>
        <Route path="/auth/register">
          <Register />
        </Route>
        <Route path="/auth/forgot-password">
          <ForgotPassword />
        </Route>
      </Switch>
    </>
  );
}
