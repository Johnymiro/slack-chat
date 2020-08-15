import React from "react";
import Auth from "./auth/Auth";
import Chat from "./chat";
import Profile from "./profile";
import PrivateMessage from "./private-message";
import Layout from "../layout";
import { Switch, Route } from "react-router-dom";

export default function BasePage() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>

          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/private-message">
              <PrivateMessage />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}
