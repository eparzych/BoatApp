import React from "react";
import {
    HashRouter,
    Route,
    Switch,
  } from 'react-router-dom';
import { AdminNavigation } from "./AdminNavigation";
import { AdminHome } from "./AdminHome";
import { AdminBoats } from "./AdminBoats";
import { AdminUsers } from "./AdminUsers.js";

export const Admin = () => {
    const NotFound = () => {
        return <h1>404,Nothing is here</h1>;
    }
    return (
        <HashRouter>
        <AdminNavigation />
                <Switch>
                    <Route path='/admin' component={AdminHome} />
                    <Route path='/adminboats' component={AdminBoats} />
                    <Route path='/adminusers' component={AdminUsers} />
                    <Route component={NotFound} />
                </Switch>
            </HashRouter>
    )
}

