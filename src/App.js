import React, {useState} from "react";
import ReactDOM from "react-dom";
import {
    HashRouter,
    Route,
    Switch,
  } from 'react-router-dom';
import "./style/style.scss";
import { Login } from "./Components/Login.js"
import { LoginReset } from "./Components/LoginReset.js"
import { Main } from "./Components/Main/Main.js";
import { AdminBoats } from "./Components/Admin/AdminBoats";
import { AdminUsers } from "./Components/Admin/AdminUsers.js";


const NotFound = () => {
    return <h1>404,Nothing is here</h1>;
}

const App = () => {
    const [userName, setUserName] = useState("test");

    const logout = () => {
        setUserName("");
    }

    if (!userName) {
        return <Login setUserName={setUserName} />
    }

    return (
            <HashRouter>
                <Switch>
                    <Route exact path='/'><Main userName={userName} logout={logout} /></Route>
                    <Route path='/reset'><LoginReset logout={logout}/></Route>
                    <Route path='/admin' component={AdminBoats}>
                        <Switch>
                            <Route exact path='/admin'>
                                <AdminBoats userName={userName} logout={logout}/></Route>
                            <Route path='/admin/users'>
                                <AdminUsers userName={userName} logout={logout}/></Route>
                            <Route component={NotFound} />
                        </Switch>
                    </Route>
                    <Route component={NotFound} />
                </Switch>
            </HashRouter>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));