import React from "react";
import ReactDOM from "react-dom";
import {
    HashRouter,
    Route,
    Switch,
  } from 'react-router-dom';
import "./style/style.scss";
import { Nav } from "./Components/Nav.js";
import { UserMain } from "./Components/Main/UserMain.js";
import { Admin } from "./Components/Admin/Admin.js";
import { AdminBoats } from "./Components/Admin/AdminBoats";
import { AdminUsers } from "./Components/Admin/AdminUsers.js";


const NotFound = () => {
    return <h1>404,Nothing is here</h1>;
}

const App = () => {

    return (
            <HashRouter>
                <Nav />
                <Switch>
                    <Route exact path='/' component={UserMain} />
                    <Route path='/admin' component={Admin} />
                    <Route component={NotFound} />
                </Switch>
            </HashRouter>
    )
}
ReactDOM.render(<App/>, document.getElementById("app"));