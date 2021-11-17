import React from "react";
import {
    NavLink,
  } from 'react-router-dom';

export const AdminTools = () => {
    return (
    <div className="admin__tools">
        <NavLink to = "/admin" activeClassName = "active__admin__elem" className = "admin__tools__elem">
            <i className="fas fa-ship"></i>
            <p>Lista łódek</p>
        </NavLink>
        <NavLink to = "/admin/users" activeClassName = "active__admin__elem" className = "admin__tools__elem">
            <i className="fas fa-user-friends"></i>
            <p>Użytkownicy</p>
        </NavLink>
    </div>
    )
}
