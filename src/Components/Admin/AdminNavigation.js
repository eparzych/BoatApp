import React from "react";
import {
    NavLink,
  } from 'react-router-dom';

export const AdminNavigation = () => {
    return (
    <div className="admin__nav">
        <NavLink to = "/admin/boats" activeClassName = "active__admin__elem" className = "admin__nav__elem">
            <i class="fas fa-ship"></i>
            <p>Lista łódek</p>
        </NavLink>
        <NavLink to = "/admin/users" activeClassName = "active__admin__elem" className = "admin__nav__elem">
            <i class="fas fa-user-friends"></i>
            <p>Użytkownicy</p>
        </NavLink>
    </div>
    )
}
