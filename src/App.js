import React from "react";
import Signup from "./components/Signup";
import {BrowserRouter,Link,Switch,Route} from "react-router-dom";
import Login from "./components/Login";
import UpdateProfile from "./components/UpdateProfile";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
    <Route path="/" exact component={Dashboard} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={Signup} />
    <Route path="/update-profile" exact component={UpdateProfile} />
    </BrowserRouter>
  );
}

export default App;
