import React from "react";
import ReactDOM from "react-dom";
import {
    HashRouter,
    Route,
    Switch,
  } from 'react-router-dom';
import "./style.scss";
import { Main } from "./Components/Main/Main.js";
import { AdminBoats } from "./Components/Admin/AdminBoats.js";
import { Nav } from "./Components/Nav.js";

const NotFound = () => {
    return <h1>404,Nothing is here</h1>;
}

const App = () => {

    return (
    <HashRouter>
        <Nav />
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/admin' component={AdminBoats} />
            <Route component={NotFound} />
        </Switch>
    </HashRouter>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));