import React, {useState} from "react";
import ReactDOM from "react-dom";
import {
    HashRouter,
    Route,
    Switch,
  } from 'react-router-dom';
import "./style/style.scss";
import { Login } from "./Components/Login.js"
// import { Login} from "./Components/LoginReset.js"
import { Nav } from "./Components/Nav.js";
import { Main } from "./Components/Main/Main.js";
import { AdminBoats } from "./Components/Admin/AdminBoats";
import { AdminUsers } from "./Components/Admin/AdminUsers.js";


const NotFound = () => {
    return <h1>404,Nothing is here</h1>;
}

const App = () => {
    const [userName, setUserName] = useState();


    if (!userName) {
        return <Login setUserName={setUserName} />
    }

    return (
            <HashRouter>
                <Nav userName={userName} />
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path='/admin'>
                        <Switch>
                            <Route exact path='/admin' component={AdminBoats} />
                            <Route path='/admin/boats' component={AdminBoats} />
                            <Route path='/admin/users' component={AdminUsers} />
                            <Route component={NotFound} />
                        </Switch>
                    </Route>
                    <Route component={NotFound} />
                </Switch>
            </HashRouter>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));