import React, { useState, useEffect } from "react";
import { AdminNavigation } from "./AdminNavigation.js";
import { AdminUser } from "./AdminUser.js";

export const AdminUsers = () => {

    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetch('/api/users')
        .then(response => response.json())
        .then(data => setUsers(data));
        }, []);
    

    return (
        <div className="wrapper__admin">
        <AdminNavigation />
        <div className="admin__main">
            <h1 className="admin__title">Lista łódek</h1>
            <ul className="admin__list">
                    {users.map(user =>
                        <AdminUser
                            key={user.id}
                            boat={user} />
                    )}
            </ul>
        </div>
    </div>
    )
}