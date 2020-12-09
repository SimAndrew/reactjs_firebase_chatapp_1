import React from "react";

import "./styles/main.scss";
import "./styles/utility.scss";
import 'rsuite/dist/styles/rsuite-default.css';
import {Switch} from "react-router";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import Index from "./pages/Home";
import PublicRoute from "./components/PublicRoute";
import {ProfileProvider} from "./context/profile.context";
// https://rsuitejs.com/ // ui library

function App() {
  return (
      <ProfileProvider>
        <Switch>
            <PublicRoute path="/signin">
                <SignIn />
            </PublicRoute>

            <PrivateRoute path="/">
                <Index />
            </PrivateRoute>
        </Switch>
      </ProfileProvider>
  );
}

export default App;
