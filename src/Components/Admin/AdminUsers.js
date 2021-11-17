import React, { useState, useEffect } from "react";
import { AdminNav } from "./AdminNav.js";
import { AdminTools } from "./AdminTools.js";
import { AdminUser } from "./AdminUser.js";

export const AdminUsers = (props) => {
    const {userName, logout} = props;
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetch('/api/users')
        .then(response => response.json())
        .then(data => setUsers(data));
        }, []);

    return (
    <div className="container__admin">
        <AdminNav userName={userName} logout={logout} />
        <div className="wrapper__admin">
            <AdminTools />
            <div className="admin__main">
                <h1 className="admin__title">Lista użytkowników</h1>
                <ul className="admin__list">
                        {users.map(user =>
                            <AdminUser
                                key={user.id}
                                user={user} />
                        )}
                </ul>
            </div>
        </div>
    </div>
    )
}